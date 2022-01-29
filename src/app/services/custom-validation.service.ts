import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { UserService } from './user.service';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  debouncer: any;

  constructor(private userService: UserService) {}

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { passwordValidation: true };
    };
  }

  confirmPasswordValidator: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let password = group.get('password')!.value;
    let confirmPassword = group.get('confirmedPassword')!.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  };

  /*emailValidator(control: FormControl){
      return this.userService.validateEmail(control.value).pipe(
      map(res => {
        return res == true ? { emailNotAvailable: true } : null;
      }),
      catchError(err => {
        console.log(err.error);
        console.log(err.message);
        return of({ "error": true });
      })
    );
  }*/
}
