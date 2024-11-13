import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppBaseComponent} from "../../../core/util/AppBaseComponent";
import Swal from "sweetalert2";
import {CharacterDto} from "../../../core/dto/characterDto";

@Component({
  selector: 'app-cinemark-form',
  templateUrl: './cinemark-form.component.html',
  styleUrl: './cinemark-form.component.css'
})
export class CinemarkFormComponent extends AppBaseComponent {

  public cinemaForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    super();

    this.cinemaForm = this._fb.group({
      basicDataForm: this._fb.group({
        typePerson: ['', Validators.required],
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        typeDocument: ['', Validators.required],
        idDocument: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required]
      }),
      paymentForm: this._fb.group({
        numberCard: ['', Validators.required],
        namePerson: ['', Validators.required],
        dateExpiry: ['', Validators.required],
        cvv: ['', Validators.required],
        numberQuotes: ['', Validators.required],
      }),
    });
  }

  public buyTickets(): void {
    if (!this.cinemaForm.valid) {
      Swal.fire({
        title: "Error...",
        text: "Tiene errores en el formulario, por favor corrijalos",
        icon: "error"
      });

      console.log(this.getAllErrorsForm(this.cinemaForm));
      this.cinemaForm.markAllAsTouched();
      return;
    }

    let formDataValue = this.cinemaForm.value;
    console.log("Valores del formulario")
    console.log(formDataValue);

    let dataPaymentValue = formDataValue['paymentForm'];
    let dataBasicDataValue = formDataValue['basicDataForm'];

    let dtoJsonAEnviarAlBackend =  {
      ...dataPaymentValue,
      ...dataBasicDataValue
    }

    console.log("Dto a enviar al backend");
    console.log(dtoJsonAEnviarAlBackend);

    Swal.fire({
      title: "Exito",
      text: "Formulario completado correctamente.",
      icon: "success"
    });

  }
}
