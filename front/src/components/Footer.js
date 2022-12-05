import "./Footer.css";

export function Footer() {
  var today = new Date();
  var year = today.getFullYear();

  return (
    <>
      {/* pikachu */}
      <div className="posititonPikachu mt-auto mt-3 mb-3">
        <div className="initialPikachu">
          <img
            className="pikachuRunning"
            src={require("../images/pikachu-running.gif")}
            alt=""
          />
        </div>
      </div>
      {/* fin pikachu */}

      {/* arboles */}
      <ol className="noBullets mb-3">
        <li className="tree"></li>
      </ol>
      {/* fin arboles */}

      <footer className="py-3 fter">
        <div className="container">
          <span className="text-white">© {year} Gonzalo España</span>
        </div>
      </footer>
    </>
  );
}
