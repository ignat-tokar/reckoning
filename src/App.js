import logo from './logo.svg';
import './App.css';
import MainScreen from './components/MainScreen';
import AddScreen from './components/AddScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/reckoning" element={<MainScreen />}/>
          <Route path="/reckoning/add" element={<AddScreen />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
