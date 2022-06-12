import type { NextPage } from 'next';

import { CodeEditor, Header, SettingPanel } from '../components';

const Home: NextPage = () => {
  return (
    <div className="font-sans antialiased min-h-screen bg-gray-900">
      <Header />
      <div className="bg-gray-900 px-8 mx-auto">
        <SettingPanel
          title="svg2jsx"
          options={[
            {
              label: 'functional',
              defaultChecked: true,
            },
            {
              label: 'typescript',
              defaultChecked: true,
            },
            {
              label: 'single quotes',
            },
            {
              label: 'memo',
            },
          ]}
        />
        <div className="grid grid-cols-2 gap-1">
          <CodeEditor value="# Typescript" />
          <CodeEditor value="# Typescript" />
        </div>
      </div>
    </div>
  );
};

export default Home;
