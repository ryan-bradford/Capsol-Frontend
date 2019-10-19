import { deserialize, autoserialize, serialize } from 'cerialize';

export class Homeowner {

    @autoserialize
    name: string;

    @autoserialize
    email: string;

    @serialize
    password: string;

    @deserialize
    pwdHash: string;
}
