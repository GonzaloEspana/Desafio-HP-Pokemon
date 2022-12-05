import { TablePokemon } from "../components/TablePokemon";

export function Home() {
  // generar la variable de estado selector
  const [selector, setSelector] = useState(
    "http://localhost:8000/api/getAllPokemons/"
  );

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
                onClick={() =>
                  setSelector("http://localhost:8000/api/getAllPokemons/")
                }
              >
                Todos
              </button>
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
                onClick={() =>
                  setSelector("http://localhost:8000/api/getByWeight/")
                }
              >
                Peso entre 30 y 80
              </button>
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
                onClick={() =>
                  setSelector("http://localhost:8000/api/getTypeGrass/")
                }
              >
                Tipo grass
              </button>
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
                onClick={() =>
                  setSelector("http://localhost:8000/api/getTypeFlying/")
                }
              >
                Tipo flying y más altos a 10
              </button>
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
                onClick={() =>
                  setSelector("http://localhost:8000/api/getAllPokemons/")
                }
              >
                Nombres invertidos
              </button>
            </div>
            {/* fin lista de botones */}
          </div>

          <div className="col-10">
            <TablePokemon selector={selector} />
          </div>
        </div>
      </div>
    </>
  );
}
