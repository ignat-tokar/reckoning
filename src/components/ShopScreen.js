import { useNavigate } from "react-router-dom";

function ShopScreen() {
  const navigate = useNavigate();
  return (
    <>
      <div className={'backButtonBlock'}>
        <button className={'backButton'} onClick={() => navigate('/reckoning')}>Назад</button>
      </div>
      <h1>Корзина</h1>
    </>
  );
}

export default ShopScreen;