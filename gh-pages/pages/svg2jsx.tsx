// import { svg2jsx } from '@wetools/svg2jsx';
import { NextPage } from 'next';
import * as React from 'react';

import { CodeEditor, Header, SettingPanel } from '../components';

const Index: NextPage = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (val: string, viewUpdate: unknown) => {
    // eslint-disable-next-line no-console
    // console.log(svg2jsx(val));
    // console.log(val, viewUpdate);
    setValue(val);
  };

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
          <CodeEditor value={value} onChange={handleChange} />
          {/* <CodeEditor value={svg2jsx(value)} /> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
