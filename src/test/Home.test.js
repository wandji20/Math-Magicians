import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('Component matches snapshot', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
