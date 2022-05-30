import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Данi нової одиницi товару</p>
      <input placeholder="Назва товару" />
      <input placeholder="Цiна закупочна" />
      <input placeholder="Цiна продовальча" />
      <input placeholder="Кiлькiсть куплених" />
      <input placeholder="Кiлькiсть проданих" />
      <button>Додати</button>
    </div>
  );
}

export default App;
