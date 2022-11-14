import React from 'react'
import style from './card.module.css';

function Card(props) {
  return (
    <div className={`${style.card} ${props.style}`}>
        {props.children}
    </div>
  )
}

export default Card