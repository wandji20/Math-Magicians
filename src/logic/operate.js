// /* eslint-disable */
import Big from 'big.js';

Big.strict = true;

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);
  let result;
  switch (operation) {
    case 'x':
      result = firstNumber.times(secondNumber);
      break;
    case '-':
      result = firstNumber.minus(secondNumber);
      break;
    case '÷':
      result = firstNumber.div(secondNumber);
      break;
    case '+':
      result = firstNumber.plus(secondNumber);
      break;
    default:
      result = null;
  }
  return result.toString();
};
export default operate;
