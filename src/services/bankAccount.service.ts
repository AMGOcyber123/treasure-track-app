import { BankAccount, CreateBankAccountDetails } from '~/types/BankAccount.types';
import api from './api.service';
const URL = '/bank-accounts';

export const createBankAccount = async (bankAccount: CreateBankAccountDetails): Promise<BankAccount> => {
    const { data } = await api.post(URL, bankAccount);
    return data;
};