import calculate from "../logic/calculate";

describe('calculate',()=>{
  it('Adds 2 number', ()=>{
    const dataObject = {
      operation: '+',
      total: '12',
      next: '2'
    }
    const buttonName = '='
    const response = calculate(dataObject, buttonName)
    expect(response.total).toEqual('14')
  })
  it('Subtracts 2 number', ()=>{
    const dataObject = {
      operation: '-',
      total: '2',
      next: '12'
    }
    const buttonName = '='
    const response = calculate(dataObject, buttonName)
    expect(response.total).toEqual('10')
  })

  it('Adds multiplies number', ()=>{
    const dataObject = {
      operation: 'x',
      total: '12',
      next: '2'
    }
    const buttonName = '='
    const response = calculate(dataObject, buttonName)
    expect(response.total).toEqual('24')
  })
  it('Divides 2 number', ()=>{
    const dataObject = {
      operation: '÷',
      total: '2',
      next: '12'
    }
    const buttonName = '='
    const response = calculate(dataObject, buttonName)
    expect(response.total).toEqual('6')
  })

  it('Returns error if denominator in division is zero', ()=>{
    const dataObject = {
      operation: '÷',
      total: '0',
      next: '12'
    }
    const buttonName = '='
    const response = calculate(dataObject, buttonName)
    expect(response.total).toEqual('error')
  })

  it('Clears the display screen', ()=>{
    const dataObject = {
      operation: 'AC',
      total: '2',
      next: '12'
    }
    const buttonName = '='
    const response = calculate(dataObject, buttonName)
    expect(response.total).toEqual('')
  })

  it('Reverses the sign of the number on the screen', ()=>{
    const dataObject = {
      operation: null,
      total: '2',
      next: '12'
    }
    const buttonName = '+/-'
    const response = calculate(dataObject, buttonName)
    expect(response.total).toEqual('-2')
  })

  it('Divides a number by 100', ()=>{
    const dataObject = {
      operation: null,
      total: '2',
      next: '12'
    }
    const buttonName = '%'
    const response = calculate(dataObject, buttonName)
    expect(response.total).toEqual('0.02')
  })
  
} )