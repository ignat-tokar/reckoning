import { useNavigate } from "react-router-dom";

function AddScreen() {

  const navigate = useNavigate();

  function addClickHandler() {
    navigate('/add');
  }

  return (
    <>
      <p>Данi нової одиницi товару</p>
      <input placeholder="Назва товару" />
      <input placeholder="Цiна закупочна" />
      <input placeholder="Цiна продовальча" />
      <input placeholder="Кiлькiсть куплених" />
      <input placeholder="Кiлькiсть проданих" />
      <button onClick={addClickHandler}>Додати</button>
    </>
  );
}

export default AddScreen;