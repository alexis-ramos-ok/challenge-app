import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.scss'],
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate(3000))
    ])
  ]
})

export class Vista1Component implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, this.onlyLetters]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    phone: ['', [Validators.required, this.onlyNumbers]],
    dateOfBirth: ['', [Validators.required, this.dateValidator]]
  });

  showNameError = false;
  showEmailError = false;
  showPasswordError = false;
  showPhoneError = false;
  showDateOfBirthError = false;

  
  bsModal: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      this.bsModal = new bootstrap.Modal(modalElement, {
        keyboard: false
      });
    }

    this.myForm = this.fb.group({
      name: ['', [Validators.required, this.onlyLetters]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', [Validators.required, this.onlyNumbers]],
      dateOfBirth: ['', [Validators.required, this.dateValidator]]
    });

    this.myForm.controls['name'].valueChanges.subscribe(() => {
      this.showNameError = this.myForm.controls['name'].invalid && (this.myForm.controls['name'].dirty || this.myForm.controls['name'].touched);
    });
  
    this.myForm.controls['dateOfBirth'].valueChanges.subscribe(() => {
      this.showDateOfBirthError = this.myForm.controls['dateOfBirth'].invalid && (this.myForm.controls['dateOfBirth'].dirty || this.myForm.controls['dateOfBirth'].touched);
    });
  }
  

  onSubmit() {
    if (this.myForm.valid) {
    
      this.bsModal.show();
    } else {
 
      this.myForm.markAllAsTouched();
  
      if (this.myForm.controls['name'].invalid) {
        this.showNameError = true;
        setTimeout(() => this.showNameError = false, 3000);
      }
  
      if (this.myForm.controls['email'].invalid) {
        this.showEmailError = true;
        setTimeout(() => this.showEmailError = false, 3000);
      }
  
      if (this.myForm.controls['password'].invalid) {
        this.showPasswordError = true;
        setTimeout(() => this.showPasswordError = false, 3000);
      }
  
      if (this.myForm.controls['phone'].invalid) {
        this.showPhoneError = true;
        setTimeout(() => this.showPhoneError = false, 3000);
      }
  
      if (this.myForm.controls['dateOfBirth'].invalid) {
        this.showDateOfBirthError = true;
        setTimeout(() => this.showDateOfBirthError = false, 3000);
      }
    }
  }

  onlyLetters(control: AbstractControl) {
    const value = control.value;
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      return { onlyLetters: true };
    }
    return null;
  }

  onlyNumbers(control: AbstractControl) {
    const value = control.value;
    if (!/^[0-9]*$/.test(value)) {
      return { onlyNumbers: true };
    }
    return null;
  }

  dateValidator(control: AbstractControl) {
    const value = control.value;
    if (typeof value === 'string') {
      const dateParts = value.split('-').map(i => parseInt(i, 10));
      if (dateParts.length !== 3 || dateParts.some(part => isNaN(part))) {
        return { dateValidator: true };
      }
      const birthDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      if (today.getMonth() < birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 18) {
        return { underage: true };
      }
    } else if (value && (!value.day || !value.month || !value.year)) {
      return { dateValidator: true };
    }
    return null;
  }
  
  
   noLetters(control: AbstractControl) {
     const value = control.value;
     if (/[a-zA-Z]/.test(value)) {
       return { noLetters: true };
     }
     return null;
   }
}