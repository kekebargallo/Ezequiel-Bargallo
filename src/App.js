import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GaleriaSquareCardContainer from './components/GaleriaSquareCardListContainer/GaleriaSquareCardListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/detail/:id" element={<ItemDetailContainer />}/>
        <Route path="/category/:categoryId" element={<GaleriaSquareCardContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
