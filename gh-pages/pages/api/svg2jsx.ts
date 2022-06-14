import { svg2jsx } from '@wetools/svg2jsx';
import { NextApiRequest, NextApiResponse } from 'next';

import HttpStatusCode from '../../components/utils/http-state-code';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const jsx = await svg2jsx(req.body.svg, req.body.options);
    res.status(HttpStatusCode.OK).send({ jsx });
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    res.status(HttpStatusCode.BAD_REQUEST).send({ message });
  }
};
