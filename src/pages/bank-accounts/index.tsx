import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader,
    CardFooter,
} from "~/components/ui/card";
import BankAccountsForm from "./BankAccountForm";

const BankAccounts = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Bank Accounts</CardTitle>
                <div className="flex justify-between">
                    <div />
                    <div className="flex-nowrap">
                        <BankAccountsForm />
                    </div>
                </div>
            </CardHeader>
            <CardContent>TODO</CardContent>
        </Card>
    )
};

export default BankAccounts;
