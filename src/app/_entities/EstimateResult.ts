import { deserialize } from 'cerialize';

export class EstimateResult {
    @deserialize
    monthlyPayment: number;

    @deserialize
    billReduction: number;
}
