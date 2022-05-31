import { useNavigate } from "react-router-dom";

function CalendarScreen() {
  const navigate = useNavigate();
  return (
    <>
      <div className={'backButtonBlock'}>
        <button className={'backButton'} onClick={() => navigate('/reckoning')}>Назад</button>
      </div>
      <h1>Сатистика по днях</h1>
    </>
  );
}

export default CalendarScreen;