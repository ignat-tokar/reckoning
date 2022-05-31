import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemDataComponent from "./ItemDataComponent";
import { getData, needUpdate, store } from "./localStore";

function MainScreen() {

  const navigate = useNavigate();
  const [items, setItems] = useState(getData());

  function backClickHandler() {
    navigate('/reckoning/add');
  }

  return (
    <>
      <div className={'exitButtonBlock'}>
        <button className={'backButton'} onClick={() => window.close()}>Вийти</button>
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
      <button style={{ marginTop: '20pt' }} onClick={backClickHandler}>Додати новий товар</button>
    </>
  );
}

export default MainScreen;