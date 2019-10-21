import { deserialize } from 'cerialize';

export class Investment {
    @deserialize
    id: string;

    @deserialize
    totalContractLength: number;

    @deserialize
    firstPaymentDate: number;

    @deserialize
    saleAmount: number;

    @deserialize
    monthlyEarnings: number;

    @deserialize
    ownerId: string;

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
