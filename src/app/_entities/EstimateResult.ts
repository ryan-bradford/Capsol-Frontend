import { deserialize } from 'cerialize';

export class EstimateResult {
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
}
