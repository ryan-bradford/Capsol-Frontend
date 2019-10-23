import { deserialize } from 'cerialize';

export class PortfolioHistory {

    @deserialize
    month: number;

    @deserialize
    cashDeposit: number;

    @deserialize
    totalValue: number;

}
