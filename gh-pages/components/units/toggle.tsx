import { Switch } from '@headlessui/react';
import classNames from 'classnames';
import * as React from 'react';

export type ToggleProps = {
  label: React.ReactNode;
  defaultChecked?: boolean;
};

export function Toggle(props: ToggleProps) {
  const { label, defaultChecked = false } = props;

  const [enable, setEnable] = React.useState(defaultChecked);

  return (
    <div className="flex items-center">
      <Switch.Group>
        <Switch.Label>
          <div
            className={classNames(
              enable ? 'text-white' : 'text-gray-600',
              'text-sm font-bold cursor-pointer select-none mr-1.5',
            )}
          >
            {label}
          </div>
        </Switch.Label>
        <Switch
          checked={enable}
          onChange={setEnable}
          className={classNames(
            enable ? 'bg-blue-600' : 'bg-gray-800',
            'relative inline-flex h-5 w-10 items-center rounded-full transition-all',
          )}
        >
          <span
            className={classNames(
              enable ? 'translate-x-6 bg-white' : 'translate-x-1 bg-gray-400',
              'inline-block h-3 w-3 transform rounded-full transition-transform',
            )}
          />
        </Switch>
      </Switch.Group>
    </div>
  );
}

export default Toggle;
