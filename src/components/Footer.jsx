import { SocialMediaBar } from "./SocialMediaBar.jsx";

export const Footer = ({ height }) => {
  return (
    <footer
      className="p-4 flex flex-col justify-center items-center"
      style={{ height }}
    >
      <div className="font-cursive text-4xl dark:text-gray-200">
        Shivaansh Agarwal
      </div>
      <SocialMediaBar />
    </footer>
  );
};
