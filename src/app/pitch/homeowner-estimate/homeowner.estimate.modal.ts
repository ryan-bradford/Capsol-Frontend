import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvestorService } from 'src/app/_services/investor.service';
import { MatSnackBar } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstimateService } from 'src/app/_services/estimate.service';

/**
 * @title Dialog Overview
 */
@Component({
    selector: 'app-homeowner-estimate-modal',
    templateUrl: 'homeowner.estimate.modal.html',
    styleUrls: ['homeowner.estimate.modal.scss'],
})
export class HomeownerEstimateModalComponent {

    address = new FormGroup({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        zip: new FormControl('', [Validators.required])
    });

    electricityBill = new FormControl('', [Validators.required, Validators.min(0)]);

    addressSet = false;
    electricitySet = false;

    estimateResults = undefined;

    constructor(
        public dialogRef: MatDialogRef<HomeownerEstimateModalComponent>,
        private estimateService: EstimateService,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    addressSubmitted() {
        this.addressSet = true;
    }

    electricitySubmitted() {
        this.electricitySet = true;
        this.estimateService.getHomeownerEstimate('', 0).subscribe((result) => {
            this.estimateResults = result;
        });
    }

    getElectricityErrorMessage() {
        return this.electricityBill.hasError('required') ? 'You must enter a number' :
            this.electricityBill.hasError('min') ? 'Not a valid amount' :
                '';
    }

}
