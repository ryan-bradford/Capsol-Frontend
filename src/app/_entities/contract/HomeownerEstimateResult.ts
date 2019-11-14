import { deserialize } from 'cerialize';

export class HomeownerEstimateResult {
    @deserialize
    public contractSize: number;

    @deserialize
    public monthlyPayment: number;

    @deserialize
    public billReduction: number;

    @deserialize
    public yearlyCarbonSavings: number;

    @deserialize
    public length: number;

    public getSavings(): number {
        return Math.round(100 * (this.billReduction - this.monthlyPayment)) / 100;
    }
}
