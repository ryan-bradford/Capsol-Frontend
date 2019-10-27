import { deserialize } from 'cerialize';

export class Contract {

    @deserialize
    public id: string;

    @deserialize
    public saleAmount: number;

    @deserialize
    public length: number;

    @deserialize
    public monthlyPayment: number;

    @deserialize
    public homeownerId: string;

    @deserialize
    public firstPaymentDate: number | null;

    @deserialize
    public percentFulfilled: number;

    @deserialize
    public positionInQueue: number | null;

}
