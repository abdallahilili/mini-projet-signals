// src/app/validators/custom-validators.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function usernameValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    // Vérifier que la valeur existe et respecte les contraintes
    if (!value) {
      return { usernameInvalid: 'Le champ est requis.' };
    }
    // Vérifier la longueur minimale
    if (value.length < minLength) {
      return { usernameInvalid: `Le nom d'utilisateur doit contenir au moins ${minLength} caractères.` };
    }
    // Vérifier les caractères autorisés (lettres, chiffres, -, _)
    const regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(value)) {
      return { usernameInvalid: "Le nom d'utilisateur ne doit pas contenir d'espaces et n'autorise que les lettres, chiffres, '-' et '_'." };
    }

    // Si toutes les vérifications sont respectées
    return null;
  };
}


export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value || '';
    if (!email) return null; // Si vide, pas d'erreur ici pour éviter conflit avec "required".

    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');

    const hasAt = atIndex > 0; // '@' présent et non premier caractère
    const hasDot = dotIndex > atIndex + 1 && dotIndex < email.length - 1; // '.' après '@' mais pas dernier
    const validLength = email.length >= 5; // Vérification basique de longueur

    const isValid = hasAt && hasDot && validLength;
    return isValid ? null : { emailInvalid: true };
  };
}

// Validator pour valider la force du mot de passe

export function passwordValidator(): ValidatorFn {
  

  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value || '';
    const lengthValid = password.length >= 8;
    const symbolValid = /[^a-zA-Z0-9\s]/.test(password);
    const numberValid = /[0-9]/.test(password);
    const letterValid = /[a-zA-Z]/.test(password);

    const isValid = lengthValid && symbolValid && numberValid && letterValid;
    return isValid ? null : { passwordInvalid: true };
  };
}

// Validator pour confirmer le mot de passe
export function confirmPasswordValidator(passwordControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const parent = control.parent;
    if (!parent) return null;

    const password = parent.get(passwordControlName)?.value;
    const confirmPassword = control.value;

    return password === confirmPassword ? null : { confirmPasswordInvalid: true };
  };
}
