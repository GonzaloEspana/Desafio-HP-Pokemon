import { RowPokemon } from "./RowPokemon";
import { useEffect, useState } from "react";

// selector es una url que lleva a la api y retorna los pokemones segun el filtro selecionado
// el fitro puede ser pokemones tipo grass por ejemplo
export function TablePokemon({ data }) {
  console.log(data[1]);
  // la variable pokemons almacena el json con toda la informacion de los pokemones
  // const [pokemons, setPokemons] = useState(["casa"]);

  // obtener los datos de la api
  // useEffect(() => {
  //   fetch(dataUrl, { method: "GET" })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // guardar la informacion formato json en la variable pokemons
  //       setPokemons(data);
  //       console.log(pokemons);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [dataUrl]);

  // useEffect(() => {
  //   fetch(dataUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("entro");
  //       console.log(data);
  //       setPokemons(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  // console.log(data);

  return (
    <table class="table bg-light align-middle text-center rounded-4">
      <thead>
        <tr>
          <th scope="col">Pokémon</th>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Tipo(s)</th>
          <th scope="col">Altura</th>
          <th scope="col">Peso</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((item) => {
          // console.log(data[item]);
          return <RowPokemon pokemon={data[item]} />;
        })}
      </tbody>
    </table>
  );
}
