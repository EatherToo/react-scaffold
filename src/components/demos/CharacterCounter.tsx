import textState, { charCountState } from '@states/demo';
import { useRecoilValue, useRecoilState } from 'recoil';

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: { target: { value: string | ((currVal: string) => string) } }) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input test-id="qqq" type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
