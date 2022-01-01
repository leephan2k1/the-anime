import "./App.scss";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="Anime-app d-flex flex-column">
      <NavBar />
      {/* router here  */}
      <HomePage />
    </div>
  );
}

export default App;
