import { deserialize } from 'cerialize';

export class CashDeposit {
    @deserialize
    public id: string;

    @deserialize
    public userId: string;

    @deserialize
    public amount: number;

    @deserialize
    public date: number;
}
