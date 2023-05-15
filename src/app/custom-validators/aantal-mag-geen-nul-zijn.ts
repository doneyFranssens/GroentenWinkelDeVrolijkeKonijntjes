import { ValidatorFn, AbstractControl, ValidationErrors} from "@angular/forms";

export function aantalMagGeenNulZijn(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value._value === 0 ? {aantalIs0: true} : null;
  }
}
