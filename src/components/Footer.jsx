import { SocialMediaBar } from "./SocialMediaBar.jsx";

export const Footer = ({ minHeight, maxHeight }) => {
  return (
    <footer
      className="p-4 flex flex-col justify-center items-center"
      style={{ minHeight, maxHeight }}
    >
      <div className="font-cursive text-3xl sm:text-4xl dark:text-gray-200">
        Shivaansh Agarwal
      </div>
      <SocialMediaBar />
    </footer>
  );
};
