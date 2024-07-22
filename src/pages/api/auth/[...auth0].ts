import { handleAuth, handleCallback, Session } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { createIfNotExists } from "~/server/repositories/user.repository";

const afterCallback = async (req: NextApiRequest, res: NextApiResponse, session: Session) => {
    const { user } = session;
    if(user) {
        await createIfNotExists(user);
    }
    return session;
};

export default handleAuth({
    async callback(req: NextApiRequest, res: NextApiResponse) {
        try{
            await handleCallback(req, res, { afterCallback});
        } catch (error) {
            if (error instanceof Error && "status" in error && "message" in error) {
                const typedError = error as { status: number; message: string };
                res.status(typedError.status).end(typedError.message);
            } else {
                res.status(500).end("Internal Server Error");
            }
        }
    },
});