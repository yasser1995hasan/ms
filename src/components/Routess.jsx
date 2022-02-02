import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Bodycare from "../Pages/Bodycare";
import Skincare from "../Pages/Skincare";
import Mobile from "./Mobile";

export default function Routess() {
  return (
    <div>
      <Routes>
        <Route path="Skincare" element={<Skincare />} />
        <Route path="BodyCare" element={<Bodycare />} />
      </Routes>
    </div>
  );
}
