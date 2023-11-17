import { Routes, Route } from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery";
import Detail from "./page/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path={"/gallery/:index"} element={<Detail />} />
    </Routes>
  );
}

export default App;
