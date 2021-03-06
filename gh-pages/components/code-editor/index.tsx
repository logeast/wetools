/**
 * extends from
 * https://uiwjs.github.io/react-codemirror/
 */
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';

type CodeEditorProps = {
  value: string;
  onChange?: (value: string, viewUpdate: unknown) => void;
  editable?: boolean;
};

export const CodeEditor = (props: CodeEditorProps) => {
  const { value, onChange, editable } = props;

  return (
    <CodeMirror
      height="calc(100vh - 64px - 48px)"
      extensions={[javascript({ jsx: true })]}
      theme="dark"
      value={value}
      onChange={onChange}
      editable={editable}
    />
  );
};

export default CodeEditor;
