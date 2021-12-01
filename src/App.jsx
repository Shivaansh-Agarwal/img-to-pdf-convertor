import { jsPDF } from "jspdf";
import { useState } from "react";
import { Header, Footer } from "./components";

const MAX_FILES_UPLOAD_ALLOWED = 10;
const A4_WIDTH = 210;
//const A4_HEIGHT = 297;

function App() {
  const [imagesList, setImagesList] = useState([]);
  return (
    <div className="h-screen flex flex-col justify-start">
      <Header title="Image to PDF Convertor" height="10vh" />
      <main
        className="p-4 flex flex-col justify-start"
        style={{ height: "75vh" }}
      >
        <div>
          <label
            htmlFor="image_upload"
            className="bg-blue-900 text-white pt-3 pb-3 pr-6 pl-6 cursor-pointer rounded w-max mt-4 mb-4"
          >
            Choose Images to Upload
          </label>
          <input
            id="image_upload"
            type="file"
            accept="image/*"
            multiple
            className="opacity-0 h-0 w-0"
            onChange={(e) => {
              updateImageDisplay(e, setImagesList);
            }}
          />
          <button
            className={`ml-4 bg-red-700 text-white pt-3 pb-3 pr-6 pl-6 rounded w-max disabled:opacity-50 ${
              imagesList.length === 0 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={imagesList.length === 0}
            onClick={() => {
              generatePDF(imagesList);
            }}
          >
            Generate PDF
          </button>
        </div>
        <div className="bg-gray-800 w-full h-4/6 mt-8 flex flex-row flex-wrap p-4 overflow-y-scroll shadow-lg rounded">
          {imagesList.length === 0 && (
            <p className="flex justify-center items-center w-full h-full text-white">
              No images uploaded yet
            </p>
          )}
          {imagesList.length !== 0 && (
            <>
              {imagesList.map((file) => {
                const imgSrc = URL.createObjectURL(file);
                return (
                  <img
                    key={imgSrc}
                    src={imgSrc}
                    alt="preview"
                    className="h-80 w-auto mr-2 mb-2 shadow-xl"
                  />
                );
              })}
            </>
          )}
        </div>
      </main>
      <Footer height="15vh" />
    </div>
  );
}

function updateImageDisplay(e, setImagesList) {
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

export default App;
