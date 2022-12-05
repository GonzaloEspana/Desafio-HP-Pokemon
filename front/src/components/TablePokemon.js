import { RowPokemon } from "./RowPokemon";
import { useEffect, useState } from "react";

export function TablePokemon({ data }) {
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
          return <RowPokemon pokemon={data[item]} />;
        })}
      </tbody>
    </table>
  );
}
