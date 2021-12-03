import { useEffect, useState } from "react";
import { Header, Main, Footer } from "./components";

function App() {
  const [isDarkModeEnabled, setDarkModeVisiblity] = useState(getCurrentTheme);
  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem("isDarkModeEnabled"));
    if (!darkMode) {
      localStorage.setItem("isDarkModeEnabled", false);
    }
  }, []);
  return (
    <div className={`${isDarkModeEnabled ? "dark" : ""}`}>
      <div className="h-screen flex flex-col justify-start dark:bg-gray-800">
        <Header
          title="Image to PDF Convertor"
          minHeight="10%"
          maxHeight="10vh"
          isDarkModeEnabled={isDarkModeEnabled}
          setDarkModeVisiblity={setDarkModeVisiblity}
        />
        <Main minHeight="70%" maxHeight="75vh" />
        <Footer minHeight="20%" maxHeight="15vh" />
      </div>
    </div>
  );
}

function getCurrentTheme() {
  const isDarkModeEnabled = JSON.parse(
    localStorage.getItem("isDarkModeEnabled")
  );
  return isDarkModeEnabled ? true : false;
}
export default App;
