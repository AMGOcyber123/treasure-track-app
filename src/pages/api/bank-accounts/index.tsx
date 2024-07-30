import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { HttpStatusCode } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { create } from '~/server/repositories/bankAccount.repository';
import { CreateBankAccountSchema } from "~/types/BankAccount.types";
import { getUserId } from '~/utils/userUtils';


const bankAccountHandler = async(req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req;
    const userId = await getUserId(req, res);
    switch(method) {
        case 'POST': {
            const bankAccount = CreateBankAccountSchema.parse(body);
            const result = await create(bankAccount, userId);
            res.status(HttpStatusCode.Ok).json(result);
            break;
        }
        default: {
            res.setHeader('Allow', ['POST']);
            res.status(HttpStatusCode.MethodNotAllowed).end(`Method ${method} is Not Allowed`);
        }
    }
};

export default withApiAuthRequired(bankAccountHandler);

