import React from 'react'

export default function Arrow({ direction, clickFunction, glyph }){
  return(  <div
      className= "slide-arrow"
      onClick={ clickFunction }>
      <span className="color-white">{glyph}</span>
    </div>)
}