/* eslint-disable */
import React from 'react'
import Button from './Button'

export default function ButtonPanel() {
  return (
    <div className = 'button-panel'>
      <div className="row">
        <Button value = {'AC'} />
        <Button value = {'+/-'} />
        <Button value = {'%'} />
        <Button isOperator = {true} value = {'÷'} />
      </div>
      <div className="row">
        <Button value = {'7'} />
        <Button value = {'8'} />
        <Button value = {'9'} />
        <Button isOperator = {true} value = {'X'} />
      </div>
      <div className="row">
        <Button value = {'4'} />
        <Button value = {'5'} />
        <Button value = {'6'} />
        <Button isOperator = {true} value = {'-'} />
      </div>
      <div className="row">
        <Button value = {'1'} />
        <Button value = {'2'} />
        <Button value = {'3'} />
        <Button isOperator = {true} value = {'+'} />
      </div>
      <div className="row">
        <Button isZero = {true} isOperator = {false} value = {'0'} />
        <Button value = {'.'} />
        <Button isOperator = {true} value = {'='} />
      </div>
    </div>
  )
}

