import { jsPDF } from "jspdf";
import { useState } from "react";
import { ImagesPreview } from "./ImagesPreview.jsx";
import { ButtonsBar } from "./ButtonsBar.jsx";

const MAX_FILES_UPLOAD_ALLOWED = 10;
const A4_WIDTH = 210;
const A4_HEIGHT = 297;

export const Main = ({ minHeight, maxHeight }) => {
  const [imagesList, setImagesList] = useState([]);
  const imagesDimensionsList = [];
  return (
    <main
      className="p-4 flex flex-col justify-start"
      style={{ minHeight, maxHeight }}
    >
      <ButtonsBar
        imagesList={imagesList}
        setImagesList={setImagesList}
        uploadPreviewImages={uploadPreviewImages}
        imagesDimensionsList={imagesDimensionsList}
        generatePDF={generatePDF}
      />
      <ImagesPreview
        imagesList={imagesList}
        imagesDimensionsList={imagesDimensionsList}
      />
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

function generatePDF(imagesList, imagesDimensionsList) {
  const doc = new jsPDF();
  doc.deletePage(1);
  imagesList.forEach((image, index) => {
    const imageFormat = image.type.substring(6).toUpperCase();
    const imgDataURL = URL.createObjectURL(image);
    doc.addPage();
    const { srcWidth, srcHeight } = imagesDimensionsList[index];
    if (srcWidth >= A4_WIDTH && srcWidth >= srcHeight) {
      const ratio = srcWidth / srcHeight;
      const height = A4_WIDTH / ratio;
      const width = A4_WIDTH;
      doc.addImage(imgDataURL, imageFormat, 0, 10, width, height);
    } else if (srcHeight >= A4_HEIGHT && srcHeight >= srcWidth) {
      const ratio = srcHeight / srcWidth;
      const height = A4_HEIGHT;
      const width = A4_HEIGHT / ratio;
      doc.addImage(imgDataURL, imageFormat, 0, 10, width, height - 20);
    } else {
      const height = srcHeight;
      const width = srcWidth;
      doc.addImage(imgDataURL, imageFormat, 0, 10, width, height);
    }
  });
  const pdfURL = doc.output("bloburl");
  window.open(pdfURL, "_blank");
}
