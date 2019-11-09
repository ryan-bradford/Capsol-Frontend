import { deserialize } from 'cerialize';

export class HomeownerStat {

    @deserialize
    public carbonReduction: number;

    @deserialize
    public totalPanels: number;

    @deserialize
    public totalSavings: number;

}
