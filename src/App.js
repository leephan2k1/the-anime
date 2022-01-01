import "./App.scss";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Anime from "./pages/Anime";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="Anime-app d-flex flex-column">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime" element={<Anime />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "5rem", fontSize: "10rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
