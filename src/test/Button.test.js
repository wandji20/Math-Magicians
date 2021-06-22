import Button from './../components/Button';
import Calculator from './../components/Calculator'
import React from 'react'

import { render, fireEvent, waitFor, screen, queryByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


test('loads and displays greeting', () => {
  const {queryByText} = render(<Calculator/>)
  const btn = queryByText('1')
  const btn1 = queryByText('.')
  expect(btn).toBeTruthy()
  expect(btn1).toBeTruthy()
})
