import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvestorService } from 'src/app/_services/investor.service';
import { MatSnackBar } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstimateService } from 'src/app/_services/estimate.service';
import { Router } from '@angular/router';
import { InvestorEstimateResult } from 'src/app/_entities/investment/InvestorEstimateResult';

/**
 * @title Dialog Overview
 */
@Component({
    selector: 'app-investor-estimate-modal',
    templateUrl: 'investor.estimate.modal.html',
    styleUrls: ['investor.estimate.modal.scss'],
})
export class InvestorEstimateModalComponent {

    amount = new FormControl('', [Validators.required, Validators.min(0)]);

    amountSet = false;

    estimateResults: InvestorEstimateResult;

    constructor(
        public dialogRef: MatDialogRef<InvestorEstimateModalComponent>,
        private estimateService: EstimateService,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    amountSubmitted() {
        this.amountSet = true;
        const bill = this.amount.value;
        this.estimateService.getInvestorEstimate(bill).subscribe((result) => {
            this.estimateResults = result;
        });
    }

    getAmountErrorMessage() {
        return this.amount.hasError('required') ? 'You must enter a number' :
            this.amount.hasError('min') ? 'Not a valid amount' :
                '';
    }

    goToInvestor() {
        localStorage.setItem('type', 'investor');
        this.router.navigate(['./investor']);
        this.dialogRef.close();
    }

}
