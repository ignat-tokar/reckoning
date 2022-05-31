import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { editItem, getData, needUpdate, replaceItem } from "./shopStore";
import checkImage from "./../../assets/check.png";

function ItemShopDataComponent ({
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
      countBuy: (countBuy>0) ? countBuy-1 : countBuy,
      countSell: (countBuy>0) ? countSell+1 : countSell,
      priceBuy,
      priceSell,
    }];
    editItem(editedItem);
    setItems(getData());
  }

  function onEditItem(){
    navigate(`/reckoning/shop/edit/?id=${id}`)
  }

  function onCheckHandler(){
    replaceItem(id);
    setItems(getData());
  }

  return (
    <tr key={id}>
      <td><button id={id} onClick={onEditItem}>{title}</button></td>
      <td>{countBuy}</td>
      <td>{countBuy*priceBuy}</td>
      <td><img className="checkImage" src={checkImage} onClick={onCheckHandler}/></td>
    </tr>
  );
}

export default ItemShopDataComponent;