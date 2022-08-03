import './Card.css';

function Card(props){

    return(
      <div className='main'>
        <div className='card'>
          <div className='card-img'>
            <img src={props.data.imgurl} alt="imagen" />
          </div>
          <div className='card-detail'>
            <h2>{props.data.name}</h2>
            <p>
              {props.data.description}
            </p>
            <h3>{props.data.price}</h3>
            <button>Ver más</button>
          </div>
        </div>
      </div>
    )
  }

  export default Card;