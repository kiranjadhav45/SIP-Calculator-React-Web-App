import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Sip from "./components/Sip";
import LPS from "./components/LPS";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Sip />} />
          <Route exact path="SIP" element={<Sip />} />
          <Route exact path="Lumpsum" element={<LPS />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
