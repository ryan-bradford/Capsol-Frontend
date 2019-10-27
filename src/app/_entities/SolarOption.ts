import { deserialize } from 'cerialize';

export class SolarOption {

    @deserialize
    electricity: number;

    @deserialize
    contractSize: number;

    @deserialize
    monthlyPayment: number;

}
