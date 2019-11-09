import { deserialize } from 'cerialize';

export class SolarOption {

    @deserialize
    public electricity: number;

    @deserialize
    public contractSize: number;

    @deserialize
    public monthlyPayment: number;

}
