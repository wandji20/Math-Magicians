import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="button-panel">
      <div className="row">
        <Button buttonName="AC" />
        <Button buttonName="+/-" />
        <Button buttonName="%" />
        <Button isOperator buttonName="÷" />
      </div>
      <div className="row">
        <Button buttonName="7" />
        <Button buttonName="8" />
        <Button buttonName="9" />
        <Button isOperator buttonName="X" />
      </div>
      <div className="row">
        <Button buttonName="4" />
        <Button buttonName="5" />
        <Button buttonName="6" />
        <Button isOperator buttonName="-" />
      </div>
      <div className="row">
        <Button buttonName="1" />
        <Button buttonName="2" />
        <Button buttonName="3" />
        <Button isOperator buttonName="+" />
      </div>
      <div className="row">
        <Button isZero isOperator={false} buttonName="0" />
        <Button buttonName="." />
        <Button isOperator buttonName="=" />
      </div>
    </div>
  );
}
