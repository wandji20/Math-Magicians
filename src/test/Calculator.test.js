import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('Component matches snapshot', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
