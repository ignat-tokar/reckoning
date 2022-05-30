function ItemDataComponent ({
  id,
  title,
  countBuy,
  countSell,
  priceBuy,
  priceSell
}) {

  return (
    <tr>
      <td><button>{title}</button></td>
      <td>{countBuy}</td>
      <td><button>{countSell}</button></td>
      <td>20</td>
    </tr>
  );
}

export default ItemDataComponent