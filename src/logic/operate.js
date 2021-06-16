import Big from 'big.js';

Big.strict = true;

const operate = (numberOne, numberTwo, operation) => {
  const BigMethods = {
    '-': Big(numberOne).minus(Big(numberTwo)),
    '+': Big(numberOne).plus(Big(numberTwo)),
    '÷': Big(numberOne).div(Big(numberTwo)),
    x: Big(numberOne).times(Big(numberTwo)),
  };
  const result = BigMethods[operation];
  return result.toString();
};
export default operate;
