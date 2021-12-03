import { MdModeNight, MdLightMode } from "react-icons/md";

export const Header = ({
  title,
  height,
  isDarkModeEnabled,
  setDarkModeVisiblity,
}) => {
  return (
    <header
      className="p-4 text-4xl font-semibold flex flex-row justify-between items-center"
      style={{ height }}
    >
      <div className="dark:text-gray-200">{title}</div>
      <div className="cursor-pointer">
        {isDarkModeEnabled ? (
          <MdLightMode
            className="text-gray-200"
            onClick={() => {
              setLightMode(setDarkModeVisiblity);
            }}
          />
        ) : (
          <MdModeNight
            onClick={() => {
              setDarkMode(setDarkModeVisiblity);
            }}
          />
        )}
      </div>
    </header>
  );
};

function setLightMode(setDarkModeVisiblity) {
  localStorage.setItem("isDarkModeEnabled", false);
  setDarkModeVisiblity(false);
}

function setDarkMode(setDarkModeVisiblity) {
  localStorage.setItem("isDarkModeEnabled", true);
  setDarkModeVisiblity(true);
}
