import React from 'react'
import Card from './Card'


const Cards = ({foods}) => {
  return (
    <div className='cards'>
        {
            foods.map(food =>{
                return(
                    <Card key={food.id} food={food}/>
                )
            })
        }
    </div>
  )
}

export default Cards