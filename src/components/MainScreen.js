import { useNavigate } from "react-router-dom";

function MainScreen() {
  
  const navigate = useNavigate();

  function backClickHandler() {
    navigate('/');
  }

  return (
    <>
      <h1>MainScreen</h1>
      <button onClick={backClickHandler}>Назад</button>
    </>
  );
}

export default MainScreen;