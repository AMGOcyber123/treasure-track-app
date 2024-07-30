import { BankAccount, CreateBankAccountDetails } from '~/types/BankAccount.types';
import { Prisma, prisma } from '~/server/db';
import { toCents } from '../../utils/numberUtils';

const transformBankAccount = ({id, accountNumber, balance}: BankAccount) => ({
    id,
    accountNumber,
    balance: Number(balance) / 100 ,
});

export const create = async (bankAccount: CreateBankAccountDetails, userId: string) => {
    const createBankAccount = await prisma.bankAccount.create({
        data: {
            accountNumber: bankAccount.accountNumber,
            balance: toCents(bankAccount.balance),
            userId,
        },
    });
    return createBankAccount;
};