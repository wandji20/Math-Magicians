import Big from 'big.js';
import operate from './operate';

Big.strict = true;

const calculate = (dataObject, buttonName) => {
  const { operation, total, next } = dataObject;

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['-', '+', '÷', 'x'];
  const newDataObject = { ...dataObject };

  if (buttonName === 'AC') {
    newDataObject.total = null;
    newDataObject.next = null;
    newDataObject.operation = null;
  }
  if (numbers.includes(buttonName)) {
    newDataObject.total = `${(total === null || total === 'error') ? buttonName : total + buttonName}`;
  }

  if (buttonName === '.') {
    if (total === null) {
      newDataObject.total = '0'.concat('.');
    } else if (total && total.indexOf(buttonName) === -1) {
      newDataObject.total = total.concat('.');
    }
  }
  if (buttonName === '+/-' && total && parseFloat(total)) {
    const newTotal = Big(total);
    newDataObject.total = newTotal.times(-1).toString();
  }
  if (buttonName === '%' && total && parseFloat(total)) {
    const newTotal = Big(total);
    newDataObject.total = newTotal.div(100).toString();
  }
  if (buttonName === '=' && operation && total && next) {
    const newTotal = operate(next, total, operation);
    newDataObject.operation = null;
    newDataObject.total = newTotal.toString();
  }

  if (operators.includes(buttonName) && newDataObject.total) {
    if (operation) {
      newDataObject.operation = buttonName;
    } else {
      newDataObject.operation = buttonName;
      newDataObject.next = total;
      newDataObject.total = null;
    }
  }
  return newDataObject;
};
export default calculate;
