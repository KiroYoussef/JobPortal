import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationDTO } from '../../Models/RegistrationDTO';
import { ReactiveFormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';
import { AccountService } from '../../Services/account.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule ],
  templateUrl: './register.component.html',
  standalone: true, 
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm: FormGroup;
  genders = ['Female', 'Male'];
  roles = ['JOBSEEKER', 'TALENTACQUISITION'];

  constructor(private fb: FormBuilder ,public accountService:AccountService) {
    this.registrationForm = this.fb.group({});

  this.CreateForm();
  }
  
CreateForm(){
  this.registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday: ['', Validators.required],
    gender: ['', Validators.required],
    role: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/)
    ]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validator: this.passwordMatchValidator  // Custom validator to match passwords
  
  });


}
  onSubmit() {
    if (this.registrationForm.valid) {
    const formData = this.registrationForm.value;

      // Map form data to DTO
      const registrationDto = new RegistrationDTO(formData);   
      this.accountService.RegisterFun(registrationDto);
      console.log("registrationDto",registrationDto)
     } else {
      console.log('Form Invalid');
    }
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password && confirmPassword && password !== confirmPassword
      ? { 'passwordMismatch': true }
      : null;
  }

}
