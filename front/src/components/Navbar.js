import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <header className="">
        <nav className="navbar navbar-expand-lg border-bottom border-light shadow-sm navbar-light ">
          <div className="container lora fw-bolder justify-content-center">
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
