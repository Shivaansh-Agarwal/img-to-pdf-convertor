export const ButtonsBar = ({
  imagesList,
  setImagesList,
  uploadPreviewImages,
  generatePDF,
}) => {
  return (
    <div className="flex flex-row flex-wrap justify-start items-center">
      <label
        htmlFor="image_upload"
        className="bg-blue-900 text-white pt-3 pb-3 pr-6 pl-6 cursor-pointer rounded w-max mt-4 mb-4 mr-4"
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
          uploadPreviewImages(e, setImagesList);
        }}
      />
      <button
        className={`bg-red-700 text-white pt-3 pb-3 pr-6 pl-6 rounded w-max disabled:opacity-50 ${
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
  );
};
