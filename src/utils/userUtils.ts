import { getSession, Session } from '@auth0/nextjs-auth0';
import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';

export const getUserId = async (
  req: NextApiRequest | IncomingMessage,
  res: NextApiResponse | ServerResponse
): Promise<string | undefined> => {
  const session: Session | null | undefined = await getSession(req, res);
  return session?.user.sub as string;
};