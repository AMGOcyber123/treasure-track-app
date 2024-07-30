// Help in the back-end and front-end to define the types of the bank account

import { z } from 'zod';
import { Prisma } from '~/server/db';

export const CreateBankAccountSchema = z.object({
    accountNumber: z.string(),
    balance: z.preprocess((balance) => parseFloat(balance as string), z.number()),
});

export type CreateBankAccountDetails = z.infer<typeof CreateBankAccountSchema>;
export type BankAccount = Prisma.BankAccountGetPayload<Prisma.BankAccountDefaultArgs>;
