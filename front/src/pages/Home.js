import { TablePokemon } from "../components/TablePokemon";
// import useState from react
import { useState, useEffect } from "react";
import "./Home.css";

export function Home() {
  // generar la variable de estado selector
  const [dataUrl, setDataUrl] = useState(
    "http://127.0.0.1:8000/api/getAllPokemons/"
  );
  // variable que almacena la info de los pokemones en formato json
  const [pokemons, setPokemons] = useState([]);
  // variable contador, sirve para llamar a https://pokeapi.co/ una unica vez
  const [contador, setContador] = useState(0);

  // obtener los datos de la api por primerza y unica vez
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/generate_pokemons/")
      .then((response) => response.json())
      .then((data) => {
        console.log("entro a generar los pokemones");
        // console.log(data);
        setContador(1);
      })
      .catch((err) => {
        // console.log(err.message);
      });
  }, [contador]);

  // obtener los datos de la api
  useEffect(() => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log("entro");
        // console.log(data);
        setPokemons(data);
      })
      .catch((err) => {
        // console.log(err.message);
      });
  }, [dataUrl, contador]);

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
                  setDataUrl("http://127.0.0.1:8000/api/getAllPokemons/")
                }
              >
                Todos
              </button>
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
                onClick={() =>
                  setDataUrl("http://127.0.0.1:8000/api/getByWeight/")
                }
              >
                Peso entre 30 y 80
              </button>
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
                onClick={() =>
                  setDataUrl("http://127.0.0.1:8000/api/getTypeGrass/")
                }
              >
                Tipo grass
              </button>
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
                onClick={() =>
                  setDataUrl("http://127.0.0.1:8000/api/getTypeFlying/")
                }
              >
                Tipo flying y más altos a 10
              </button>
              <button
                type="button"
                className="btn rounded-5 fw-bolder btn-light btn-outline-dark mx-2"
                onClick={() =>
                  setDataUrl("http://127.0.0.1:8000/api/getReverseName/")
                }
              >
                Nombres invertidos
              </button>
            </div>
            {/* fin lista de botones */}
          </div>

          {/* Sección mensaje de carga y tabla */}
          <div className="col-10">
            {/* se muestra un mensaje de espera hasta que la tabla está cargada*/}
            {contador === 0 ? (
              <div className="d-flex justify-content-center text-center">
                <div>
                  <img
                    className="loading_pokeball"
                    // pokebola hecha por kiwowork
                    // https://www.deviantart.com/kiwowork/art/Pokeball-892727328
                    src={require("../images/pokebola.gif")}
                    alt=""
                  />
                  <p className="fw-bolder display-6">Cargando Pokémones...</p>
                </div>
              </div>
            ) : null}

            {/* cuando la información ya está cargada se muestra la tabla, ese caso es contador=1 */}
            {contador === 1 ? (
              <div>
                <TablePokemon data={pokemons} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
