import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationDTO } from '../Models/RegistrationDTO';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  Api: string = "https://localhost:7231/api/";

  constructor(private http: HttpClient, private router: Router) {
  }

  RegisterFun(
    Registration: RegistrationDTO
  ) {
    this.Register(Registration).subscribe(
      (res: any) => {

        this.router.navigate(['/Home']); 
        localStorage.setItem("access_token", res.token);
      },
      (err: any) => {
      }
    );
  }
 

  Register(RegisterForm: any) {
    return this.http.post<any>(`${this.Api}register?`, RegisterForm);
  }

 
}
