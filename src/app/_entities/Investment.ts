import { deserialize } from 'cerialize';

export class Investment {
    @deserialize
    id: string;

    @deserialize
    contractId: string;

    @deserialize
    currentValue: number;

    @deserialize
    ownerId: string;
}
