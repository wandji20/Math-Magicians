/* eslint-disable */
import React from 'react'
import App from './App'

const Calculator = () => {
  return (
    <div style = {{display: 'flex', width: '90%', justifyContent: 'space-between', margin: 'auto', alignItems: 'center'}}>
      <h2>Let’s do some math!</h2>
      <App/>
    </div>
  )
}
export default Calculator;