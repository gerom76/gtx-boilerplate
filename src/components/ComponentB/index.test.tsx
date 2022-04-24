import renderer from 'react-test-renderer';
import { ComponentB } from '.';

// REMARKS: How to update snapshot for CI:
// yarn run test ComponentB -u
describe('ComponentB tests', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ComponentB parameter1="MUI2" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
