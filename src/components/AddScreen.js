import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewItem } from "./localStore";

function AddScreen() {

  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [countBuy, setCountBuy] = useState('');
  const [countSell, setCountSell] = useState('');
  const [priceBuy, setPriceBuy] = useState('');
  const [priceSell, setPriceSell] = useState('');

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
  function addClickHandler() {
    let item = [{
      title,
      countBuy,
      countSell,
      priceBuy,
      priceSell,
    }]
    addNewItem(item);
    navigate('/reckoning');
  }

  return (
    <>
      <h2>Данi нової одиницi товару</h2>
      <input value={title} onChange={onTitleChange} placeholder="Назва товару" />
      <input value={priceBuy} onChange={onPriceBuyChange} placeholder="Цiна закупочна" />
      <input value={priceSell} onChange={onPriceSellChange} placeholder="Цiна продовальча" />
      <input value={countBuy} onChange={onCountBuyChange} placeholder="Кiлькiсть куплених" />
      <input value={countSell} onChange={onCountSellChange} placeholder="Кiлькiсть проданих" />
      <button onClick={addClickHandler}>Додати</button>
    </>
  );
}

export default AddScreen;