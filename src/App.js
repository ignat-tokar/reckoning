import logo from './logo.svg';
import './App.css';
import MainScreen from './components/MainScreen';
import AddScreen from './components/AddScreen';
import EditScreen from './components/EditScreen';
import CalendarScreen from './components/CalendarScreen';
import ShopScreen from './components/ShopScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/reckoning" element={<MainScreen />}/>
          <Route path="/reckoning/add" element={<AddScreen />}/>
          <Route path="/reckoning/edit/*" element={<EditScreen />}/>
          <Route path="/reckoning/calendar" element={<CalendarScreen />}/>
          <Route path="/reckoning/shop" element={<ShopScreen />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
