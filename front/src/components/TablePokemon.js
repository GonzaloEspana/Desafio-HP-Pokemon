import { RowPokemon } from "./RowPokemon";

// Genera la tabla de pokemones en base a la variable data
// data: variable que contiene la info de los pokemones en formato json
export function TablePokemon({ data }) {
  return (
    <table className="table bg-light align-middle text-center rounded-4">
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
          return <RowPokemon pokemon={data[item]} />;
        })}
      </tbody>
    </table>
  );
}
