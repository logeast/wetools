import { formatter } from './formatter';
import { OptionsType } from './types';

async function svg2jsx(svg: string, options: OptionsType): Promise<string> {
  const formatted = formatter(svg, options);

  return formatted;
}

export { svg2jsx };

export default svg2jsx;
