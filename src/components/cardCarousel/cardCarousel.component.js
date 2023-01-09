import "./cardCarousel.style.css"

export const CardCarousel = ({hero, name, image, state, price}) => {
  return (
    <div className="card">
      <h3>{hero}</h3>
      <h3>{name}</h3>
      <img src={image}/>
      <p>Estado: {state}</p>
      <p>Precio: {price}</p>
    </div>
  )
}