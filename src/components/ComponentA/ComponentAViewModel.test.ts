import { ComponentAViewModel } from './ComponentAViewModel';

describe('ComponentAViewModel tests', () => {
  test('it should initialized from definition', () => {
    const sut = new ComponentAViewModel();

    expect(sut).toBeTruthy();
  });
});
