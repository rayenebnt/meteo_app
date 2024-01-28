import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "@/components/navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
