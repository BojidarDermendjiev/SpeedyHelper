import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./Home";
import CheatSheet from "./CheatSheet";
import MindMap from "./MindMap";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cheat-sheets" element={<CheatSheet />} />
        <Route path="/mind-map" element={<MindMap />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
