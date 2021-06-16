import Big from 'big.js';
import operate from './operate';

Big.strict = true;

const calculate = (dataObject, buttonName) => {
  const { operation, total, next } = dataObject;

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['-', '+', '÷', 'x'];
  const newDataObject = { ...dataObject };
  if (buttonName === 'AC') {
    newDataObject.total = '0';
    newDataObject.next = '0';
    newDataObject.operation = null;
  }
  if (numbers.includes(buttonName)) {
    newDataObject.total = `${total === '0' ? buttonName : total + buttonName}`;
  }
  if (buttonName === '.' && total.indexOf(buttonName) === -1) {
    newDataObject.total = total.concat('.');
  }
  if (buttonName === '+/-') {
    const newNext = Big(next);
    const newTotal = Big(total);
    newDataObject.total = newTotal.times(-1).toString();
    newDataObject.next = newNext.times(-1).toString();
  }
  if (buttonName === '%') {
    const newNext = Big(next);
    const newTotal = Big(total);
    newDataObject.total = newTotal.div(100).toString();
    newDataObject.next = newNext.div(100).toString();
  }
  if (buttonName === '=' && operation) {
    const newTotal = operate(next, total, operation);
    newDataObject.operation = null;
    newDataObject.total = newTotal.toString();
  }

  if (operators.includes(buttonName)) {
    if (operation) {
      newDataObject.operation = buttonName;
    } else {
      newDataObject.operation = buttonName;
      newDataObject.next = total;
      newDataObject.total = '0';
    }
  }

  return newDataObject;
};
export default calculate;
