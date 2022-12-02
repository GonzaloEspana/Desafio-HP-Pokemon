import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Pages
import { Home } from "./pages/Home";
// Components
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// fondo de pantalla
import background from "./images/grass_1.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // fondo de pantalla pasto
  <div
    class="d-flex flex-column min-vh-100"
    style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: "repeat",
      zIndex: "-1",
    }}
  >
    <React.StrictMode>
      <Navbar />

      {/* arboles */}
      <ol className="noBullets py-4">
        <li className="tree"></li>
      </ol>
      {/* fin arboles */}
      <Home />
      <Footer />
    </React.StrictMode>
  </div>
);
