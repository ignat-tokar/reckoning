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
          <Route path="/" element={<AddScreen />}/>
          <Route path="/add" element={<MainScreen />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
