import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvestorService } from 'src/app/_services/investor.service';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

/**
 * @title Dialog Overview
 */
@Component({
    selector: 'app-transfer-funds-modal',
    templateUrl: 'transfer.funds.modal.html',
    styleUrls: ['transfer.funds.modal.scss'],
})
export class TransferFundsModalComponent {

    buyOrSell: boolean;
    amount = new FormControl('', [Validators.required, Validators.min(0)]);

    constructor(
        public dialogRef: MatDialogRef<TransferFundsModalComponent>,
        private investorService: InvestorService,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    sellFunds() {
        this.investorService.sellInvestment(localStorage.getItem('email'), this.amount.value).subscribe((result) => {
            this.dialogRef.close(-1 * this.amount.value);
        });
    }

    addFunds() {
        this.investorService.addInvestment(localStorage.getItem('email'), this.amount.value).subscribe((result) => {
            this.dialogRef.close(this.amount.value);
        });
    }

    getErrorMessage() {
        return this.amount.hasError('required') ? 'You must enter a number' :
            this.amount.hasError('min') ? 'Not a valid amount' :
                '';
    }

}
