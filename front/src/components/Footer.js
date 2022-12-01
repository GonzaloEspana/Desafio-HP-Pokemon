import "./Footer.css";

export function Footer() {
  var today = new Date();
  var year = today.getFullYear();

  return (
    <>
      {/* <!-- footer --> */}

      <footer class="mt-auto py-3 fter">
        <div class="container">
          <span class="text-white">
            © {year} Gonzalo España. Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </>
  );
}
