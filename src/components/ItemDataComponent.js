import { Navigate, useNavigate } from "react-router-dom";
import { editItem } from "./localStore";

function ItemDataComponent ({
  id,
  title,
  countBuy,
  countSell,
  priceBuy,
  priceSell
}) {

  const navigate = useNavigate();

  function plusCountSell(){
    editItem({
      id,
      title,
      countBuy: countBuy-1,
      countSell: countSell+1,
      priceBuy,
      priceSell
    });
  }

  function onEditItem(e){
    navigate(`/reckoning/edit/?id=${e.target.id}`)
  }

  return (
    <tr>
      <td><button id={id} onClick={onEditItem}>{title}</button></td>
      <td>{countBuy}</td>
      <td><button onClick={plusCountSell}>{countSell}</button></td>
      <td>{(priceSell-priceBuy)*countSell}</td>
    </tr>
  );
}

export default ItemDataComponent