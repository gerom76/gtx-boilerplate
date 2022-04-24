import renderer from 'react-test-renderer';
import { ComponentA } from '.';

it('renders correctly', () => {
  const tree = renderer.create(<ComponentA parameter1="FGH" />).toJSON();
  expect(tree).toMatchSnapshot();
});
