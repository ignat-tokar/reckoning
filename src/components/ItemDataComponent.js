import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { editItem, getData, needUpdate } from "./localStore";

function ItemDataComponent ({
  id,
  title,
  countBuy,
  countSell,
  priceBuy,
  priceSell,
  setItems
}) {

  const navigate = useNavigate();

  function plusCountSell(){
    let editedItem = [{
      id,
      title,
      countBuy: countBuy-1,
      countSell: countSell+1,
      priceBuy,
      priceSell,
    }];
    editItem(editedItem);
    setItems(getData());
  }

  function onEditItem(e){
    navigate(`/reckoning/edit/?id=${e.target.id}`)
  }

  return (
    <tr key={id}>
      <td><button id={id} onClick={onEditItem}>{title}</button></td>
      <td>{countBuy}</td>
      <td><button onClick={plusCountSell}>{countSell}</button></td>
      <td>{(priceSell-priceBuy)*countSell}</td>
    </tr>
  );
}

export default ItemDataComponent