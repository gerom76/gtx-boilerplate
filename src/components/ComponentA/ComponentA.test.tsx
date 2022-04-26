import renderer, { act } from 'react-test-renderer';
import { ComponentA } from './ComponentA';

it('renders correctly', async () => {
  const sut = <ComponentA parameter1="FGH" />;

  act(() => {
    const tree = renderer.create(sut).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
