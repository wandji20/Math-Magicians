/* eslint-disable */
import React from 'react'

export default function Button(props) {
  const {value, isOperator, isZero} = props
  console.log(isZero)
  if (isOperator){
    return (
      <div className = 'op-btn'>
        {value}
      </div>
    );
  } else {
    return (
      <div className ={isZero ? 'btn zero' : 'btn'}>
        {value}
      </div>
    )
  }
}
