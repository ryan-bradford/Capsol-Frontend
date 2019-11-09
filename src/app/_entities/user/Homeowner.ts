import { deserialize, autoserialize, serialize, deserializeAs } from 'cerialize';
import { Contract } from '../contract/Contract';

export class Homeowner {

    @autoserialize
    public name: string;

    @autoserialize
    public email: string;

    @serialize
    public password: string;

    @deserialize
    public pwdHash: string;

    @deserializeAs(Contract)
    public contract: Contract;

}
