import PropTypes from 'prop-types'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <>
      <img className='image rounded-top' src={img} alt={name} />
      <h3 className='text-start mt-2 mx-2'>Pizza {name}</h3>
      <h3 className='fs-4 fw-normal'>Ingredientes</h3>
      <p>🍕 {ingredients.join(', ')}</p>
      <h2 className='mb-4'>Precio: {price}</h2>
      <div className='mb-3'>
        <button className='btn btn-outline-dark mx-2'>Ver más 👀</button>
        <button className='btn btn-dark mx-2'>Añadir 🛒</button>
      </div>
    </>
  )
}

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired
}

export default CardPizza
