import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
      greeting="SALUDOS" />
      <ItemCount 
      stock={3} 
      initial={1}/>
    </div>
  );
}

export default App;
