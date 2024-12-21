// age-form.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ageValidator } from '../validators/age-validator';

@Component({
  selector: 'app-age-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
 templateUrl: './custom-age-validator.component.html',
  styleUrl: './custom-age-validator.component.css'
})
export class AgeFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      age: ['', [
        Validators.required,
        ageValidator()
      ]]
    });
  }

  get ageControl() {
    return this.userForm.get('age');
  }

  getAgeErrorMessage(): string {
    const errors = this.ageControl?.errors?.['ageInvalid'];
    if (typeof errors === 'string') {
      return errors;
    }
    return errors?.message || 'Âge invalide';
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
      // Traitement du formulaire...
      alert('Formulaire valide ! Age : ' + this.userForm.value.age);
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
//  templateUrl: './custom-age-validator.component.html',
//   styleUrl: './custom-age-validator.component.css'