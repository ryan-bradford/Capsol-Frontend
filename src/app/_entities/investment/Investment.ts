import { deserialize } from 'cerialize';

export class Investment {
    @deserialize
    public id: string;

    @deserialize
    public totalContractLength: number;

    @deserialize
    public firstPaymentDate: number;

    @deserialize
    public saleAmount: number;

    @deserialize
    public monthlyEarnings: number;

    @deserialize
    public ownerId: string;

    public getReturnedValueAt(month: number): number {
        if (this.firstPaymentDate === null) {
            return 0;
        }
        if (month < this.firstPaymentDate) {
            return 0;
        }
        if (month - this.firstPaymentDate > this.totalContractLength) {
            return this.monthlyEarnings * this.totalContractLength;
        }
        return (month - this.firstPaymentDate) * this.monthlyEarnings;
    }

    public getValueAtMonth(month: number): number {
        if (this.firstPaymentDate === null) {
            return this.saleAmount;
        }
        if (month < this.firstPaymentDate) {
            return this.saleAmount;
        }
        if (month - this.firstPaymentDate > this.totalContractLength) {
            return 0;
        }
        return this.saleAmount - this.saleAmount * (month - this.firstPaymentDate) / this.totalContractLength;
    }
}
