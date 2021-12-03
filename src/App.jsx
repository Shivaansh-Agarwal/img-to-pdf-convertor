import { useEffect, useState } from "react";
import { Header, Main, Footer } from "./components";

function App() {
  const [isDarkModeEnabled, setDarkModeVisiblity] = useState(getCurrentTheme);
  useEffect(() => {
    const darkMode = localStorage.getItem("isDarkModeEnabled");
    if (!darkMode) {
      localStorage.setItem("isDarkModeEnabled", false);
    }
  }, []);
  return (
    <div className={`${isDarkModeEnabled ? "dark" : ""}`}>
      <div className="h-screen flex flex-col justify-start dark:bg-gray-800">
        <Header
          title="Image to PDF Convertor"
          height="10vh"
          isDarkModeEnabled={isDarkModeEnabled}
          setDarkModeVisiblity={setDarkModeVisiblity}
        />
        <Main height="75vh" />
        <Footer height="15vh" />
      </div>
    </div>
  );
}

function getCurrentTheme() {
  const isDarkModeEnabled = localStorage.getItem("isDarkModeEnabled");
  return isDarkModeEnabled === true ? true : false;
}
export default App;
