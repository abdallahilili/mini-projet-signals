import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { usernameValidator, emailValidator, passwordValidator, confirmPasswordValidator } from '../validators/custom-validators';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true, // Indique que ce composant est autonome
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ], // Importe les modules nécessaires
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [usernameValidator(3)]],
      email: ['', [emailValidator()]],
      password: ['', [passwordValidator()]],
      confirmPassword: ['', [confirmPasswordValidator('password')]],
    });
  }

  onsubmit() {
    if (this.registerForm.valid) {
      alert('Données envoyées avec succès.');
      console.log('Valeurs du formulaire :', this.registerForm.value);
    } else {
      console.error('Formulaire invalide', this.registerForm.errors);
    }
  }
}
