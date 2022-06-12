import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';

type CodeEditorProps = {
  value: string;
  onChange?: (value: unknown, viewUpdate: unknown) => void;
  editable?: boolean;
};

export const CodeEditor = (props: CodeEditorProps) => {
  const { value, onChange, editable } = props;

  return (
    <CodeMirror
      height="100vh"
      extensions={[javascript({ jsx: true })]}
      theme="dark"
      value={value}
      onChange={onChange}
      editable={editable}
    />
  );
};

export default CodeEditor;
