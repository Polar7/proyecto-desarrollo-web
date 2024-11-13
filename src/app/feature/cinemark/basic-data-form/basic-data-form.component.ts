import {Component, OnInit} from '@angular/core';
import {ControlContainer} from "@angular/forms";

@Component({
  selector: 'app-basic-data-form',
  templateUrl: './basic-data-form.component.html',
  styleUrl: './basic-data-form.component.css'
})
export class BasicDataFormComponent implements OnInit {

  public basicDataForm: any;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.basicDataForm = this.controlContainer.control;
    this.basicDataForm = this.basicDataForm.controls['basicDataForm'];
  }
}
