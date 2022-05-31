import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemDataComponent from "./ItemDataComponent";
import { getData, needUpdate, store, summaryProfit } from "./localStore";
import shopImage from "./../assets/shop.png";
import calendarImage from "./../assets/calendar.png";

function MainScreen() {

  const navigate = useNavigate();
  const [items, setItems] = useState(getData());

  function addClickHandler() {
    navigate('/reckoning/add');
  }

  return (
    <>
      <div className={'exitButtonBlock'}>
        <button className={'backButton'} onClick={() => window.close()}>Вийти</button>
        <img src={shopImage} onClick={()=> navigate('/reckoning/shop')} />
        {/* <img style={{marginRight: '20pt'}} src={calendarImage} onClick={()=> navigate('/reckoning/calendar')} /> */}
      </div>    
      <h2>Список всiх товарiв</h2>
      <table>
        <tr>
          <th>Назва товару</th>
          <th>К-cть зак.</th>
          <th>К-cть прод.</th>
          <th>Приб. (грн)</th>
        </tr>
        {items && items.map(item =>
          {
          return <ItemDataComponent
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
      <div className="profitBlock">
        <h4>Загальний прибуток :</h4><h4 className="profit">{summaryProfit} (грн)</h4>
      </div>
      <button style={{ marginTop: '20pt' }} onClick={addClickHandler}>Додати новий товар</button>
    </>
  );
}

export default MainScreen;