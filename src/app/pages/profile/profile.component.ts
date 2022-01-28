import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  public formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      FirstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      Rating: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(100)
      ]),
      LastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      Prefix: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      Position: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      Picture: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      BirthDate: new FormControl('', [
        Validators.required,
      ]),
      HireDate: new FormControl('', [
        Validators.required,
      ]),
      Notes: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000)
      ]),
      Address: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),

    });
  }
}
