import textState, { charCountState } from '@states/demo';
import { useRecoilValue, useRecoilState } from 'recoil';

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <span data-testid="text-show">Character Count: {count}</span>;
}

export function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: { target: { value: string | ((currVal: string) => string) } }) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input data-testid="text-input" type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default function CharacterCounter() {
  return (
    <div>
      <TextInput test-id="text-input" />
      <CharacterCount />
    </div>
  );
}
