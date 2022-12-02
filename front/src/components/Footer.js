import "./Footer.css";

export function Footer() {
  var today = new Date();
  var year = today.getFullYear();

  return (
    <>
      {/* <!-- footer --> */}

      {/* arboles */}
      <ol className="noBullets mt-auto mb-3">
        <li className="tree"></li>
      </ol>
      {/* fin arboles */}

      <footer class="py-3 fter">
        <div class="container">
          <span class="text-white">
            © {year} Gonzalo España. Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </>
  );
}
