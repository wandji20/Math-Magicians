/* eslint-disable */
import Big from 'big.js';
Big.strict =  false


const calculate = (dataObject, buttonName) => {
  let { operation, total, next } = dataObject
  const numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']
  if (numbers.includes(buttonName)){
    dataObject.total = `${total === '0' ? buttonName : total+buttonName }`
  }
  if(buttonName === '.' && total.indexOf(buttonName) === -1 ){
    dataObject.total = total.concat('.')
  }
  if (buttonName === 'AC'){
    dataObject.total = '0'
    dataObject.next = '0'
    dataObject.operation = null
  }
  if (buttonName === '+/-'){
    let newNext = (Big(next))
    let newTotal = (Big(total))
    dataObject.total = newTotal.times(-1).toString()
    dataObject.next = newNext.times(-1).toString()
  }
  return dataObject
}
export default calculate