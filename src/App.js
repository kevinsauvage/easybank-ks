import { useState } from "react";
import "./App.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import SecondSectionHome from "./SecondSectionHome";
import ThirdSectionHome from "./ThirdSectionHome";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner setIsOpen={setIsOpen} />
      <SecondSectionHome />
      <ThirdSectionHome />
      <Footer />
    </div>
  );
}

export default App;
