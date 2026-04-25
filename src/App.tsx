import { Routes, Route } from "react-router-dom";

import { HomePage } from "./components/HomePage";
import { TopBar, DEFAULT_BUTTONS } from "./components/TopBar";

import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <TopBar title={"Example Updatable Site"} buttons={DEFAULT_BUTTONS} />

      <div style={{ paddingTop: "2em", maxWidth: "95%" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}
