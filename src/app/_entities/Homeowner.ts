import { deserialize, autoserialize, serialize, deserializeAs } from 'cerialize';
import { Contract } from './Contract';

export class Homeowner {

    @autoserialize
    name: string;

    @autoserialize
    email: string;

    @serialize
    password: string;

    @deserialize
    pwdHash: string;

    @deserializeAs(Contract)
    contract: Contract;

}
