import { useNavigate } from "react-router-dom";

function AddScreen() {

  const navigate = useNavigate();

  function addClickHandler() {
    navigate('/reckoning/add');
  }

  return (
    <>
      <h2>Данi нової одиницi товару</h2>
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