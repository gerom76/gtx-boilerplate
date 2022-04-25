import TestRenderer, { act } from 'react-test-renderer';
import { ComponentB } from '.';

// REMARKS: How to update snapshot for CI:
// yarn run test ComponentB -u
describe('ComponentB tests', () => {
  it('renders correctly', async () => {
    // act
    const sut = <ComponentB parameter1="MUI3" />;

    act(() => {
      const testRenderer = TestRenderer.create(sut);
      // assert
      const tree = testRenderer.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
