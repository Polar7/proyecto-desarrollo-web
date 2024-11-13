import {Component, OnInit} from '@angular/core';
import {ControlContainer} from "@angular/forms";

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent implements OnInit {

  public paymentForm: any;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.paymentForm = this.controlContainer.control;
    this.paymentForm = this.paymentForm.controls['paymentForm'];
  }

}
