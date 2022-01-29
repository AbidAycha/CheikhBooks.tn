import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { CustomValidationService } from 'src/app/services/custom-validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnDestroy {

  showPassword = false;
  showConfirmedPassword = false;
  private unsubscribe$ = new Subject<void>();
  fileToUpload: File | null = null;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private customValidation: CustomValidationService) { }

    registrationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required], /*this.customValidation.emailValidator.bind(this.customValidation)*/],
      birthday: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, this.customValidation.patternValidator()])],
      confirmedPassword: ['', [Validators.required]],
      avatar: ['', Validators.required],
    },
    {
      validator: this.customValidation.confirmPasswordValidator,
    }
    );

    get firstname() {
      return this.registrationForm.get('firstname');
    }

    get lastname() {
      return this.registrationForm.get('lastname');
    }

    get email() {
      return this.registrationForm.get('email');
    }
    get birthday() {
      return this.registrationForm.get('birthday');
    }
    get phone() {
      return this.registrationForm.get('phone');
    }
    get password() {
      return this.registrationForm.get('password');
    }
    get confirmedPassword() {
      return this.registrationForm.get('confirmedPassword');
    }
    get avatar() {
      return this.registrationForm.get('avatar');;
    }


  register() {
    if (this.registrationForm.valid) {
      this.userService.registerUser(this.toFormData(this.registrationForm.value))
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          () => {
            this.router.navigate(['/login']);
          }, error => {
            console.log('Error ocurred while adding user data : ', error);
          });
    }
  }
  handleFileInput(event: any) {
    this.fileToUpload = event.target!.files[0];
}
toFormData(userdetails: any) {
  const formData = new FormData();
  formData.append('avatar',this.fileToUpload as Blob, this.fileToUpload!.name);
  formData.append('firstname', userdetails.firstname);
  formData.append('lastname',userdetails.lastname);
  formData.append('email',userdetails.email);
  formData.append('password',userdetails.password);
  formData.append('birthday',userdetails.birthday);
  formData.append('phone',userdetails.phone);
  return formData;
}
changePasswdVisibility(){
  this.showPassword = !this.showPassword;
}
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
