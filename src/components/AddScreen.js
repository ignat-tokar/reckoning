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
      countBuy: Number.parseInt(countBuy),
      countSell: Number.parseInt(countSell),
      priceBuy: Number.parseInt(priceBuy),
      priceSell: Number.parseInt(priceSell),
    }]    
    addNewItem(item);
    navigate('/reckoning');
  }

  return (
    <>
      <div className={'backButtonBlock'}>
        <button className={'backButton'} onClick={() => navigate('/reckoning')}>Назад</button>
      </div>
      <h2>Данi нової одиницi товару</h2>
      <input value={title} onChange={onTitleChange} placeholder="Назва товару" />
      <input type="number" value={priceBuy} onChange={onPriceBuyChange} placeholder="Цiна закупочна" />
      <input type="number" value={priceSell} onChange={onPriceSellChange} placeholder="Цiна продовальча" />
      <input type="number" value={countBuy} onChange={onCountBuyChange} placeholder="Кiлькiсть куплених" />
      <input type="number" value={countSell} onChange={onCountSellChange} placeholder="Кiлькiсть проданих" />
      <button onClick={addClickHandler}>Додати</button>
    </>
  );
}

export default AddScreen;