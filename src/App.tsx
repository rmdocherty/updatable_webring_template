import { Routes, Route } from "react-router-dom";

import { HomePage } from "./components/HomePage";

import "./styles.css";

export default function App() {
  return (
    <div className="container">
      {/* <Title texts={DEFAULT_TEXTS} themeProps={themeProps} />
      <NavBar pages={DEFAULT_PAGES} /> */}

      <div style={{ paddingTop: "2em", maxWidth: "95%" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}
