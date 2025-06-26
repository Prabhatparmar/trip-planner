import React from 'react'
import './Cards.css'
type CardsProps={
  title:string;
  image:string;
}
const Cards = ({title,image} : CardsProps) => {
  return (
    <div className="cards">
        <img src={image} alt={title} />
        <h3>{title}</h3>
    </div>
  )
}

export default Cards