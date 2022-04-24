import renderer from 'react-test-renderer';
import { ComponentB } from '.';

it('renders correctly', () => {
  const tree = renderer.create(<ComponentB parameter1="MUI2" />).toJSON();
  expect(tree).toMatchSnapshot();
});
