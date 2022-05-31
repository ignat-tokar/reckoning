import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemShopDataComponent from "./ItemShopDataComponent";
import { getData } from "./shopStore";

function ShopScreen() {

  const navigate = useNavigate();

  const [items, setItems] = useState(getData());

  function addClickHandler() {
    navigate('/reckoning/shop/add');
  }

  return (
    <>
      <div className={'backButtonBlock'}>
        <button className={'backButton'} onClick={() => navigate('/reckoning')}>Назад</button>
      </div>
      <h2>Корзина</h2>
      <table>
        <tr>
          <th>Назва товару</th>
          <th>К-cть</th>
          <th>Сумма (грн)</th>
          <th></th>
        </tr>
        {items && items.map(item =>
          {
          return <ItemShopDataComponent
            id={item.id}
            title={item.title}
            countBuy={item.countBuy}
            countSell={item.countSell}
            priceBuy={item.priceBuy}
            priceSell={item.priceSell}
            setItems={setItems}
          />})
        }
      </table>
      {/* SummaryExpense */}
      {/* <div className="profitBlock">
        <h4>Загальний прибуток :</h4><h4 className="profit">{summaryProfit} (грн)</h4>
      </div> */}
      <button style={{ marginTop: '20pt' }} onClick={addClickHandler}>Додати новий товар</button>
    </>
  );
}

export default ShopScreen;