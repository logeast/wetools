import * as React from 'react';

import { Toggle, ToggleProps } from '../units';

type SettingPanelProps = {
  title: React.ReactNode;
  options?: ToggleProps[];
};

export function SettingPanel(props: SettingPanelProps) {
  const { title, options } = props;

  return (
    <section className="flex items-center justify-between h-14 gap-6">
      <h3 className="text-white font-bold uppercase">{title}</h3>
      <div className="flex items-center justify-end gap-6">
        {options?.map((item, index) => (
          <Toggle {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default SettingPanel;
