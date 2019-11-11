import { deserializeAs, deserialize } from 'cerialize';

import { PortfolioHistory } from '../investment/PortfolioHistory';

export class PerformanceStat {
    @deserialize
    public interestRate: number;

    @deserializeAs(PortfolioHistory)
    public portfolioHistory: PortfolioHistory[];
}
