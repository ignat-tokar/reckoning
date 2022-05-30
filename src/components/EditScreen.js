import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editItem, getItemById } from "./localStore";

function EditScreen() {

  const navigate = useNavigate();
  
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [countBuy, setCountBuy] = useState('');
  const [countSell, setCountSell] = useState('');
  const [priceBuy, setPriceBuy] = useState('');
  const [priceSell, setPriceSell] = useState('');

  useEffect(()=>{
    let id = Number.parseInt(window.location.href.split('?')[1].split('=')[1]);
    let item = getItemById(id);
    setId(item.id);
    setTitle(item.title);
    setCountBuy(item.countBuy);
    setCountSell(item.countSell);
    setPriceBuy(item.priceBuy);
    setPriceSell(item.priceSell);
  },[]);

  function onTitleChange(e) {
    setTitle(e.target.value);
  }
  function onCountBuyChange(e) {
    setCountBuy(e.target.value);
  }
  function onCountSellChange(e) {
    setCountSell(e.target.value);
  }
  function onPriceBuyChange(e) {
    setPriceBuy(e.target.value);
  }
  function onPriceSellChange(e) {
    setPriceSell(e.target.value);
  }
  function editClickHandler() {
    let editedItem = [{
      id,
      title,
      countBuy,
      countSell,
      priceBuy,
      priceSell,
    }]
    editItem(editedItem);
    navigate('/reckoning');
  }
  function cancelClickHandler() {
    navigate('/reckoning');
  }  

  return (
    <>
      <h2>Редагування товару</h2>
      <input value={title} onChange={onTitleChange} placeholder="Назва товару" />
      <input type="number" value={priceBuy} onChange={onPriceBuyChange} placeholder="Цiна закупочна" />
      <input type="number" value={priceSell} onChange={onPriceSellChange} placeholder="Цiна продовальча" />
      <input type="number" value={countBuy} onChange={onCountBuyChange} placeholder="Кiлькiсть куплених" />
      <input type="number" value={countSell} onChange={onCountSellChange} placeholder="Кiлькiсть проданих" />
      <button onClick={editClickHandler}>Зберегти</button>
      <button onClick={cancelClickHandler}>Вiдмiнити</button>
    </>
  );
}

export default EditScreen;