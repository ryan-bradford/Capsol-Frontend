import { deserialize, autoserialize, serialize, deserializeAs } from 'cerialize';
import { Investment } from './Investment';
import { CashDeposit } from './CashDeposit';

export class Investor {

    @deserialize
    id: string;

    @autoserialize
    name: string;

    @autoserialize
    email: string;

    @serialize
    password: string;

    @deserialize
    pwdHash: string;

    @deserialize
    totalCash: number;

    @deserializeAs(Investment)
    investments: Investment[];

    @deserializeAs(CashDeposit)
    cashDeposits: CashDeposit[];

    public getDepositsAtMonth(month: number) {
        let total = 0;
        this.cashDeposits.forEach((deposit) => total += deposit.date <= month ? deposit.amount : 0);
        return total;
    }

    public getValueAtMonth(month: number): number {
        let total = 0;
        total += this.getDepositsAtMonth(month);
        this.investments.forEach((investment) => total += investment.getReturnedValueAt(month));
        this.investments.forEach((investment) => total += investment.getValueAtMonth(month) - investment.saleAmount);
        return total;
    }

    public getEarliestMonthActive(): number {
        let minMonth = 10000000;
        this.cashDeposits.forEach((deposit) => minMonth = Math.min(minMonth, deposit.date));
        return minMonth;
    }

    public getLastMonthActive(): number {
        let minMonth = 0;
        this.investments.forEach((investment) => minMonth =
            Math.max(minMonth, investment.firstPaymentDate + investment.totalContractLength));
        return minMonth;
    }

}
