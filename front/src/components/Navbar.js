import "./Navbar.css";
// import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <header className="">
        <nav class="navbar navbar-expand-lg border-bottom border-light shadow-sm navbar-light ">
          <div class="container lora fw-bolder justify-content-center">
            {/* <Link class="navbar-brand" to="">
              Quiero Libros
            </Link> */}
            <a className="navbar-brand" href="">
              <img
                className="logo"
                src={require("../images/logo_poke.png")}
                alt=""
              />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
