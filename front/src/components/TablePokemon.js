import { RowPokemon } from "./RowPokemon";

export function TablePokemon() {
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
        <RowPokemon />
        <RowPokemon />
        <RowPokemon />
        <RowPokemon />
      </tbody>
    </table>
  );
}
