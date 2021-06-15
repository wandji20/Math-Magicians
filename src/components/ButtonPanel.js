/* eslint-disable */
import React from 'react'
import Button from './Button'

export default function ButtonPanel() {
  return (
    <div className = 'button-panel'>
      <div className="row">
        <Button isOperator = {false} value = {'AC'} />
        <Button isOperator = {false} value = {'+/-'} />
        <Button isOperator = {false} value = {'%'} />
        <Button isOperator = {true} value = {'÷'} />
      </div>
      <div className="row">
        <Button isOperator = {false} value = {'7'} />
        <Button isOperator = {false} value = {'8'} />
        <Button isOperator = {false} value = {'9'} />
        <Button isOperator = {true} value = {'X'} />
      </div>
      <div className="row">
        <Button isOperator = {false} value = {'4'} />
        <Button isOperator = {false} value = {'5'} />
        <Button isOperator = {false} value = {'6'} />
        <Button isOperator = {true} value = {'-'} />
      </div>
      <div className="row">
        <Button isOperator = {false} value = {'1'} />
        <Button isOperator = {false} value = {'2'} />
        <Button isOperator = {false} value = {'3'} />
        <Button isOperator = {true} value = {'+'} />
      </div>
      <div className="row">
        <Button isZero = {true} isOperator = {false} value = {'0'} />
        <Button isOperator = {false} value = {'.'} />
        <Button isOperator = {true} value = {'='} />
      </div>
    </div>
  )
}

