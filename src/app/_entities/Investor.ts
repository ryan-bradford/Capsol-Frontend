import { deserialize, autoserialize, serialize } from 'cerialize';

export class Investor {

    @autoserialize
    name: string;

    @autoserialize
    email: string;

    @serialize
    password: string;

    @deserialize
    pwdHash: string;

    @deserialize
    portfolioValue: number;
}
