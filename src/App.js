import logo from './logo.svg';
import './App.css';
import img from "./images/logo.jpg";
import NavBar from './components/NavBar';

function App() {

const styles ={marginTop:"20px", color:"blue"}

  return (
    <div>
      <NavBar/>
      <h1 className="title">Hola Coderhouse</h1>
      <br/>
      <p style={styles}>Lorem ispum.</p>
      <button onClick={()=>alert('Hola')}>Click me</button>
      <img src={img} alt="Logo" />
    </div>
  );
}

export default App;