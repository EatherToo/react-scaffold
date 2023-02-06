/**
 * @jest-environment jsdom
 */
import { cleanup, render, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './CharacterCounter';

describe('CharaterCount dom unit test', () => {
  afterEach(cleanup);

  it('TextInput unit test', () => {
    const { getByTestId } = render(
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>,
    );
    expect((getByTestId('text-input') as HTMLInputElement).value).toBe('');
    fireEvent.change(getByTestId('text-input') as HTMLInputElement, { target: { value: 'new value' } });
    expect((getByTestId('text-input') as HTMLInputElement).value).toBe('new value');
    expect((getByTestId('text-show') as HTMLSpanElement).textContent).toBe('Character Count: 9');
  });
});
