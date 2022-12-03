import { TablePokemon } from "../components/TablePokemon";

export function Home() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 pb-3">
            {/* lista de botones */}
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
              >
                Todos
              </button>
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
              >
                Peso entre 30 y 80
              </button>
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
              >
                Tipo grass
              </button>
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
              >
                Tipo flying y más altos a 10
              </button>
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
              >
                Nombres invertidos
              </button>
            </div>
            {/* fin lista de botones */}
          </div>

          <div className="col-10">
            <TablePokemon />
          </div>
        </div>
      </div>
    </>
  );
}
