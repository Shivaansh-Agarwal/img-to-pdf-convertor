export const ImagesPreview = ({ imagesList }) => {
  return (
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
  );
};
