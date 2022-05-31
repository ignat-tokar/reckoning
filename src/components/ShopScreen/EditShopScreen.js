import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteItem, editItem, getItemById } from "./shopStore";

function EditScreen() {

  const navigate = useNavigate();

  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [countBuy, setCountBuy] = useState('');
  const [countSell, setCountSell] = useState('');
  const [priceBuy, setPriceBuy] = useState('');
  const [priceSell, setPriceSell] = useState('');

  useEffect(() => {
    let id = window.location.href.split('?')[1].split('=')[1];
    let item = getItemById(id);
    setId(item.id);
    setTitle(item.title);
    setCountBuy(item.countBuy);
    setCountSell(item.countSell);
    setPriceBuy(item.priceBuy);
    setPriceSell(item.priceSell);
  }, []);

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
  function editClickHandler() {
    let editedItem = [{
      id,
      title,
      countBuy: (countBuy === '') ? 0 : Number.parseInt(countBuy),
      countSell: (countSell === '') ? 0 : Number.parseInt(countSell),
      priceBuy: Number.parseInt(priceBuy),
      priceSell: Number.parseInt(priceSell),
    }]
    editItem(editedItem);
    navigate('/reckoning/shop');
  }
  function deleteClickHandler() {
    deleteItem(id);
    navigate('/reckoning/shop');
  }

  return (
    <>
      <div className={'backButtonBlock'}>
        <button className={'backButton'} onClick={() => navigate('/reckoning/shop')}>Назад</button>
        <button className={'deleteButton'} onClick={deleteClickHandler}>Видалити</button>
      </div>
      <h2>Редагування товару</h2>
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
      <button onClick={editClickHandler}>Зберегти</button>
    </>
  );
}

export default EditScreen;