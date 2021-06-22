import renderer from 'react-test-renderer';
import Quote from '../components/Quote'


it('Component matches snapshot', () => {
  const tree = renderer
    .create(<Quote/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});