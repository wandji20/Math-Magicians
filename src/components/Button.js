/* eslint-disable */
import React from 'react'

export default function Button(props) {
  console.log(props)
  const {value} = props
  return (
    <div className = 'btn'>
      {value}
    </div>
  )
}
