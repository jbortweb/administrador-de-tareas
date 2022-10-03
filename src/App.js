import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import logo from './image/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img 
          className='logo' 
          src={logo} 
          alt='Logo'
        />
      </div>
      <div className='lista-tareas'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
      
    </div>
  );
}

export default App;
