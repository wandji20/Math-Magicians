import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

import '@testing-library/jest-dom/extend-expect';

test('loads and displays greeting', () => {
  const { queryByText } = render(<Calculator />);
  const btn = queryByText('1');
  const btn1 = queryByText('.');
  expect(btn).toBeTruthy();
  expect(btn1).toBeTruthy();
});
