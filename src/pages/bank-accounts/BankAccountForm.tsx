import { useState } from 'react';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import { Button } from '~/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Input } from '~/components/ui/input';


const formSchema = z.object({
    accountNumber: z
        .string()
        .min(1, { message: 'Account number is empty' })
        .max(50, { message: 'Account number should be shorter than 50 characters' }),
    balance: z
        .string({
            required_error: 'Balance is empty',
        })
        .refine((value) => !isNaN(Number(value)) && Number(value) >= 0, { message: 'Balance should be a non-negative number' }),
});

const BankAccountForm = () => {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            accountNumber: '',
            balance: '0',
        },
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
        console.log(values);
        setIsDialogOpen(false);
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={(open) => setIsDialogOpen(open)}>
            <DialogTrigger asChild>
                <Button size="sm">Add</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Create new bank account</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            name="accountNumber"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Account Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter account number" {...field} />
                                    </FormControl>
                                    {form.formState.errors.accountNumber && (
                                        <FormMessage>{form.formState.errors.accountNumber.message}</FormMessage>
                                    )}
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="balance"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Balance</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Enter balance" {...field} />
                                    </FormControl>
                                    {form.formState.errors.balance && (
                                        <FormMessage>{form.formState.errors.balance.message}</FormMessage>
                                    )}
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit" disabled={!form.formState.isValid}>
                                Confirm
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default BankAccountForm;
