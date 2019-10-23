import { deserialize, autoserialize, serialize, deserializeAs } from 'cerialize';
import { Investment } from './Investment';
import { CashDeposit } from './CashDeposit';
import { PortfolioHistory } from './PortfolioHistory';

export class Investor {

    @deserialize
    id: string;

    @autoserialize
    name: string;

    @autoserialize
    email: string;

    @serialize
    password: string;

    @deserialize
    pwdHash: string;

    @deserialize
    totalCash: number;

    @deserializeAs(Investment)
    investments: Investment[];

    @deserializeAs(PortfolioHistory)
    portfolioHistory: PortfolioHistory[];


}
