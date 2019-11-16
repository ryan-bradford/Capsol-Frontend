import { deserialize } from 'cerialize';

export class InvestorEstimateResult {
    @deserialize
    public baseAmount: number;

    @deserialize
    public twentyYearValue: number;

    @deserialize
    public fiveYearValue: number;

    @deserialize
    public twentyYearCarbonImpact: number;

    @deserialize
    public fiveYearCarbonImpact: number;

    public getFiveYearEarnings(): number {
        return Math.round(100 * (this.fiveYearValue - this.baseAmount)) / 100;
    }

    public getTwentyYearEarnings(): number {
        return Math.round(100 * (this.twentyYearValue - this.baseAmount)) / 100;
    }

}
