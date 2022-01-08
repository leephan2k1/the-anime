import React, { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";

export default function CustomRoute({ children }) {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  return <>{progress && <div>Loading</div>}</>;
}
