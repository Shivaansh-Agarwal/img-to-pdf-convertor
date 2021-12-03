import { Header, Main, Footer } from "./components";

function App() {
  return (
    <div className="h-screen flex flex-col justify-start">
      <Header title="Image to PDF Convertor" height="10vh" />
      <Main height="75vh" />
      <Footer height="15vh" />
    </div>
  );
}

export default App;
