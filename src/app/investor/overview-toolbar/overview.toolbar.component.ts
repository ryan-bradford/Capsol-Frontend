import { Component, Input } from '@angular/core';
import { Investment } from 'src/app/_entities/investment/Investment';
import { InvestorService } from 'src/app/_services/investor.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { TransferFundsModalComponent } from '../transfer-funds-modal/transfer.funds.modal';

@Component({
    selector: 'app-investor-overview-toolbar',
    templateUrl: './overview.toolbar.component.html',
    styleUrls: ['./overview.toolbar.component.scss']
})
export class InvestorOverviewToolbarComponent {

    @Input()
    balance: number;

    @Input()
    earnings: number;

    constructor(
        private investorService: InvestorService,
        public dialog: MatDialog,
        private snackBar: MatSnackBar) {
    }

    addFunds() {
        this.investorService.addInvestment(localStorage.getItem('email'), 100).subscribe();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(TransferFundsModalComponent, {
            width: '250px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (!result) { return; }
            const message = result < 0 ? `Added to a Queue to Withdraw $${result}` :
                `$${result} will be Added to Your Account`;
            this.snackBar.open(message, 'close', {
                duration: 10000,
            });
        });
    }

}
