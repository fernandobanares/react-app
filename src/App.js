import './App.css';
import NavBar from './components/NavBar.jsx';
import Card from './components/Card/Card';




function App() {
let userColor = "green"
const styles ={marginTop:"20px", color:"userColor"}
let usuario = "Santiago"


const dataProducts = [{
  name: "Televisor 32",
  price: 1000,
  imgurl: "https://picsum.photos/280/260",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quaerat maiores perspiciatis. Enim velit, dolores veritatis eum corporis sit, officiis provident deleniti repudiandae tempora atque, natus sapiente saepe laborum expedita."
},
{
  name: "Monitor 22",
  price: 800,
  imgurl: "https://picsum.photos/280/260",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quaerat maiores perspiciatis. Enim velit, dolores veritatis eum corporis sit, officiis provident deleniti repudiandae tempora atque, natus sapiente saepe laborum expedita."
}]





  return (
    <div className="App">
      <NavBar/>
      <div className="header-banner">
        <img 
        className='header-img'
        src='./images/coderhouse.png'
        alt='Coderhouse'
         />
      </div>
      <h1 className='title'>Coderhouse React 34710</h1>
      <p style={styles}>{usuario}</p>
      <br />
      <button onClick={() => alert('Click vent callback')}>Click Me</button>
      <Card data={dataProducts[0]} />
      <Card data={dataProducts[1]} />
    </div>
  );
}

export default App;

