export const ButtonsBar = ({
  imagesList,
  setImagesList,
  uploadPreviewImages,
  generatePDF,
  imagesDimensionsList,
}) => {
  return (
    <div className="flex flex-row flex-wrap justify-start items-center">
      <label
        htmlFor="image_upload"
        className="bg-blue-900 text-white pt-2 pb-2 pr-4 pl-4 sm:pt-3 sm:pb-3 sm:pr-6 sm:pl-6 cursor-pointer rounded w-max mt-2 mb-2 sm:mt-4 sm:mb-4 mr-4"
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
        className={`bg-red-700 text-white pt-2 pb-2 pr-4 pl-4 sm:pt-3 sm:pb-3 sm:pr-6 sm:pl-6 rounded w-max disabled:opacity-50 ${
          imagesList.length === 0 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={imagesList.length === 0}
        onClick={() => {
          generatePDF(imagesList, imagesDimensionsList);
        }}
      >
        Generate PDF
      </button>
    </div>
  );
};
