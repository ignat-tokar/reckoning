import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewShopItem } from "./shopStore";

function AddShopScreen() {

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
  function onPriceBuyChange(e) {
    setPriceBuy(e.target.value);
  }
  function onPriceSellChange(e) {
    setPriceSell(e.target.value);
  }
  function addClickHandler() {
    let item = [{
      title,
      countBuy: (countBuy === '') ? 0 : Number.parseInt(countBuy),
      countSell: (countSell === '') ? 0 : Number.parseInt(countSell),
      priceBuy: Number.parseInt(priceBuy),
      priceSell: Number.parseInt(priceSell),
    }]    
    addNewShopItem(item);
    navigate('/reckoning/shop');
  }

  return (
    <>
      <div className={'backButtonBlock'}>
        <button className={'backButton'} onClick={() => navigate('/reckoning/shop')}>Назад</button>
      </div>
      <h2>Данi нової одиницi товару</h2>
      <input value={title} onChange={onTitleChange} placeholder="Назва товару" />
      <div className={'inputBlock'}>
        <span>Цiна закупочна</span>
        <input type="number" value={priceBuy} onChange={onPriceBuyChange} placeholder="грн" />
      </div>
      <div className={'inputBlock'}>
        <span>Цiна продовальча</span>
        <input type="number" value={priceSell} onChange={onPriceSellChange} placeholder="грн" />
      </div>
      <div className={'inputBlock'}>
        <span>Скiльки треба купити</span>
        <input type="number" value={countBuy} onChange={onCountBuyChange} placeholder="шт" />
      </div>
      <button onClick={addClickHandler}>Додати</button>
    </>
  );
}

export default AddShopScreen;