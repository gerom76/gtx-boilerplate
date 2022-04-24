import { ComponentBViewModel } from './ComponentBViewModel';

describe('ComponentAViewModel tests', () => {
  test('it should initialized from definition', () => {
    const sut = new ComponentBViewModel();

    expect(sut).toBeTruthy();
  });
});
