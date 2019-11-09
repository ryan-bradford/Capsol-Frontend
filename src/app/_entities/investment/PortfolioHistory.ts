import { deserialize } from 'cerialize';

export class PortfolioHistory {

    @deserialize
    public month: number;

    @deserialize
    public cashDeposit: number;

    @deserialize
    public totalValue: number;

}
