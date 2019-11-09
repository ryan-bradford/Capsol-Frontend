import { deserialize, autoserialize, serialize, deserializeAs } from 'cerialize';
import { Investment } from '../investment/Investment';
import { PortfolioHistory } from '../investment/PortfolioHistory';

export class Investor {

    @deserialize
    public id: string;

    @autoserialize
    public name: string;

    @autoserialize
    public email: string;

    @serialize
    public password: string;

    @deserialize
    public pwdHash: string;

    @deserialize
    public totalCash: number;

    @deserialize
    public interestRate: number;

    @deserializeAs(Investment)
    public investments: Investment[];

    @deserializeAs(PortfolioHistory)
    public portfolioHistory: PortfolioHistory[];


}
