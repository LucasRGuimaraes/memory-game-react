import React from 'react'

export default function CardElement(props) {
  return (
    <div onClick={() => {props.flipCard(props.card)}} id={props.card.id} className={`card ${props.card.flipped? "flip" : ""}`}>
          <div className='card_front'>
               <img className='icon' src={`./assets/images/${props.card.icon}.png`} alt={props.card.icon} />
          </div>
          <div className='card_back'>
               {'</>'}
          </div>
     </div>
  )
}
