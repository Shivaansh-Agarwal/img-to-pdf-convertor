export const ImagesPreview = ({ imagesList, imagesDimensionsList }) => {
  return (
    <div className="bg-gray-300 dark:bg-gray-900 w-full h-4/6 xl:h-5/6 mt-8 flex flex-row flex-wrap p-4 overflow-y-auto shadow-lg rounded">
      {imagesList.length === 0 && (
        <p className="flex justify-center items-center w-full h-full text-gray-900 dark:text-gray-300">
          No images uploaded yet
        </p>
      )}
      {imagesList.length !== 0 && (
        <>
          {imagesList.map((file, index) => {
            const imgSrc = URL.createObjectURL(file);
            return (
              <img
                key={imgSrc}
                src={imgSrc}
                alt="preview"
                className="h-80 w-auto mr-2 mb-2 shadow-xl"
                onLoad={(e) => {
                  updateImageDimensions(e, imagesDimensionsList);
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

function updateImageDimensions(e, imagesDimensionsList) {
  imagesDimensionsList.push({
    srcHeight: e.target.naturalHeight,
    srcWidth: e.target.naturalWidth,
  });
}
