//sans regex
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validator pour vérifier la longueur minimale du nom d'utilisateur
export function usernameValidator1(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = control.value && control.value.length >= minLength;
    return isValid ? null : { usernameInvalid: true };
  };
}

export function emailValidator1(): ValidatorFn {
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
  

//   export function passwordValidator(): ValidatorFn {
//     return (control: AbstractControl): ValidationErrors | null => {
//       const password = control.value || '';
//       if (!password) return null;
  
//       const hasMinimumLength = password.length >= 6;
//       const hasSymbol = password.split('').some((char) => !/[a-zA-Z0-9\s]/.test(char)); // Vérifie les caractères spéciaux
//       const hasNumber = password.split('').some((char) => char >= '0' && char <= '9'); // Vérifie la présence d'un chiffre
  
//       const isValid = hasMinimumLength && hasSymbol && hasNumber;
//       return isValid ? null : { passwordInvalid: true };
//     };
//   }

  export function confirmPasswordValidator1(passwordControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const parent = control.parent;
      if (!parent) return null;
      const password = parent.get(passwordControlName)?.value;
      const confirmPassword = control.value; 
      return password === confirmPassword ? null : { confirmPasswordInvalid: true };
    };
  }

  
  export function passwordValidator1(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value || '';
      if (!password) return null;
  
      // Vérifie les critères de base :
      const lengthValid = password.length >= 6; // Longueur minimale de 6
      const hasSymbol = [...password].some((char) => !"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".includes(char)); // Contient un symbole
      const hasNumber = [...password].some((char) => "0123456789".includes(char)); // Contient un chiffre
      const isValid = lengthValid && hasSymbol && hasNumber;
      return isValid ? null : { passwordInvalid: true };
    };
  }
  
 
 
  
  
  
  