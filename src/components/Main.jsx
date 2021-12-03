import { jsPDF } from "jspdf";
import { useState } from "react";
import { ImagesPreview } from "./ImagesPreview.jsx";
import { ButtonsBar } from "./ButtonsBar.jsx";

const MAX_FILES_UPLOAD_ALLOWED = 10;
const A4_WIDTH = 210;
//const A4_HEIGHT = 297;

export const Main = ({ minHeight, maxHeight }) => {
  const [imagesList, setImagesList] = useState([]);

  return (
    <main
      className="p-4 flex flex-col justify-start"
      style={{ minHeight, maxHeight }}
    >
      <ButtonsBar
        imagesList={imagesList}
        setImagesList={setImagesList}
        uploadPreviewImages={uploadPreviewImages}
        generatePDF={generatePDF}
      />
      <ImagesPreview imagesList={imagesList} />
    </main>
  );
};

function uploadPreviewImages(e, setImagesList) {
  let imagesList = Array.from(e.target.files);
  if (imagesList.length > MAX_FILES_UPLOAD_ALLOWED) {
    alert("Maximum 10 images can be uploaded in one go.");
    e.preventDefault();
  } else {
    setImagesList(imagesList);
  }
}

function generatePDF(imagesList) {
  const doc = new jsPDF();
  doc.deletePage(1);
  imagesList.forEach((image) => {
    const imageFormat = image.type.substring(6).toUpperCase();
    const imgDataURL = URL.createObjectURL(image);
    doc.addPage();
    doc.addImage(imgDataURL, imageFormat, 0, 40, A4_WIDTH, 160);
  });
  const pdfURL = doc.output("bloburl");
  window.open(pdfURL, "_blank");
}
