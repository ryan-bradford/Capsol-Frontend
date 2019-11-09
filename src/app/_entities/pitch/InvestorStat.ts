import { deserialize } from 'cerialize';

export class InvestorStat {

    @deserialize
    public carbonReduction: number;

    @deserialize
    public totalPortfolio: number;

    @deserialize
    public targetRate: number;

}
