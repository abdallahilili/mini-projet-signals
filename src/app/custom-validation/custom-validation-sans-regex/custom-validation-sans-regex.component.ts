import { Component } from '@angular/core';
import {
  usernameValidator1,
  emailValidator1,
  passwordValidator1,
  confirmPasswordValidator1
} from '../validators/costom_sans_regex';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-validation-sans-regex',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatCardModule,MatInputModule,MatButtonModule, MatIconModule], // Inclure uniquement les modules ou composants nécessaires
  templateUrl: './custom-validation-sans-regex.component.html',
  styleUrls: ['./custom-validation-sans-regex.component.css'],
})
export class CustomValidationSansRegexComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [usernameValidator1(3)]],
      email: ['', [emailValidator1()]],
      password: ['', [passwordValidator1()]],
      confirmPassword: ['', [confirmPasswordValidator1('password')]],
    });
    console.log(this.registerForm);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      alert('Données envoyées avec succès.');
      console.log(this.registerForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
