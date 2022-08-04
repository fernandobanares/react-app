import React from 'react';

function ItemCount(props){
// console.log(props.stock);/* Valor máximo del contador */
  const [cantidad, setCantidad] = React.useState(1);
  
  const handleIncrement = () =>{
    if (cantidad < props.stock){
        setCantidad (cantidad + 1);
    } else {
        alert("Ya no hay mas stock")
    }
  }

  const handleDecrement = () =>{
    if (cantidad > props.initial){
        setCantidad (cantidad - 1);
    } else {
        alert("No puedes llevar comprar menos de 1 producto")
    }
  }

  return(
    <div>
      <h3>Click Counter</h3>
      <button onClick={handleIncrement}>+</button>
      {/* <button onClick={ ()=>setClicks(0)}>Reset</button> */}
      <button onClick={handleDecrement}>-</button>
      <h3>Clicks: {cantidad}</h3>

    </div>
  )
}

export default ItemCount;