export function RowPokemon() {
  return (
    <tr>
      <th scope="row">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
          // style="width: 40px; height: 40px; object-fit: cover;"
          style={{ width: "70px", height: "70px", objectFit: "cover" }}
          alt=""
        />
      </th>
      <td>6</td>
      <td>Charmander</td>
      <td>Fuego</td>
      <td>2 metros</td>
      <td>240 kilos</td>
    </tr>
  );
}
