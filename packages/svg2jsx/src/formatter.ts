import prettier from 'prettier';

import { OptionsType } from './types';

/**
 * Get the React jsx or tsx template of the SVG.
 *
 * @param svg - The SVG string to be transformed
 * @param options - Pick the options used in the template
 *
 * @returns The string of the template
 */
function getTemplate(svg: string, options: Pick<OptionsType, 'name' | 'type' | 'lang' | 'memo'>) {
  const { name = 'Icon', type = 'functional', lang = 'jsx', memo = false } = options;

  let template = '';
  const parentComponent = memo ? `React.PureComponent` : `React.Component`;
  const exportComponent = memo ? `React.memo(${name})` : name;

  if (type === 'functional' && lang === 'jsx') {
    template = `
      import React from 'react';

      function ${name}() {
        return ${svg};
      }

      export default ${exportComponent};
    `;
  } else if (type === 'functional' && lang === 'tsx') {
    template = `
      import * as React from 'react';

      function ${name}(): React.SVGProps<SVGElement> {
        return ${svg};
      }

      export default ${exportComponent};
    `;
  } else if (type === 'class' && lang === 'jsx') {
    template = `
      import React from 'react';

      class ${name} extends ${parentComponent} {
        render() {
          return ${svg};
        }
      }

      export default ${exportComponent};
    `;
  } else if (type === 'class' && lang === 'tsx') {
    template = `
      import * as React from 'react';

      class ${name} extends ${parentComponent} {
        render() {
          return ${svg};
        }
      }

      export default ${exportComponent};
    `;
  }

  return template;
}

/**
 * Create React component and format with Prettier.
 *
 * @param svg  - The SVG string to be transformed
 * @param options - Options may be provided to override the defaults
 *
 * @returns The string of the formatted component.
 */
export function formatter(svg: string, options: OptionsType) {
  const compoent = getTemplate(svg, options);
  const formatted = prettier.format(compoent, {
    ...options,
    parser: 'babel',
  });

  return formatted;
}

export default formatter;
