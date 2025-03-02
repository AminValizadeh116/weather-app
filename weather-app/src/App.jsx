import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router'
import Home from "./pages/home/home";
import Info from "./pages/info/info";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
