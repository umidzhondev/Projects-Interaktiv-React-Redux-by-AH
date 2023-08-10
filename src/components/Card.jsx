import React from 'react'

const Card = ({food}) => {
    const {src,name,price} =food;
  return (
    <div className='card'>
        <div className="card__img">
            <img src={src} alt={name} />
        </div>
        <div className="card__body">
            <h3>{name}</h3>
            <p>{price} so'm</p>
        </div>
    </div>
  )
}

export default Card