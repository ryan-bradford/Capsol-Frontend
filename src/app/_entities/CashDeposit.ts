import { deserialize } from 'cerialize';

export class CashDeposit {
    @deserialize
    id: string;

    @deserialize
    userId: string;

    @deserialize
    amount: number;

    @deserialize
    date: number;
}
