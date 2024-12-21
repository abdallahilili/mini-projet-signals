// age-validator.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ageValidator(min: number = 18, max: number = 100): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    
    const age = parseInt(control.value);
    
    if (isNaN(age)) {
      return { ageInvalid: 'L\'âge doit être un nombre' };
    }
    
    if (age < min || age > max || age == 0) {
      return { 
        ageInvalid: {
          message: `L'âge doit être entre ${min} et ${max} ans`,
          current: age,
          min: min,
          max: max
        }
      };
    }
    
    return null;
  };
}