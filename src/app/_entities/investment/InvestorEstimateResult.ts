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

}
