// Funcion que retorna los disintos campos pertenecientes a un pokemon (id, nombre, tipo, altura, peso)
// Los campos generados corresponde a una fila de una tabla
// pokemon: objeto que contiene los datos de un pokemon
export function RowPokemon({ pokemon }) {
  return (
    <tr className="text-capitalize">
      <th scope="row">
        <img
          src={pokemon.image_url}
          style={{ width: "70px", height: "70px", objectFit: "cover" }}
          alt=""
        />
      </th>
      <td>{pokemon.id}</td>
      <td>{pokemon.name}</td>
      <td>
        {/* Si existe type1 lo retorna en caso contrario retorna ""*/}
        {pokemon.type1 ? pokemon.type1 : ""}
        {/* Si existe type2 retorna "/ type2" caso contrario ""  */}
        {pokemon.type2 ? ` / ${pokemon.type2}` : ""}
      </td>
      <td>{pokemon.height} centímetros</td>
      <td>{pokemon.weight} kilos</td>
    </tr>
  );
}
