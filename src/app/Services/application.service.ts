import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationDto } from '../Models/ApplicationDto ';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  boolean: string = "https://localhost:7231/api/";

  constructor(private http: HttpClient, private router: Router) {
  }

  SaveApplication(
    Application: ApplicationDto
  ) {
    this.AddApplication(Application).subscribe(
      (res: boolean) => {
        debugger
        if (res == true){
          this.router.navigate(['/home']);
        }else{
          console.warn("there error while saveing")
        }

      },
      (err: any) => {
      }
    );

  }
  AddApplication(body: any) {
    return this.http.post<boolean>(`${this.boolean}AddApplication`, body);
  }
}
