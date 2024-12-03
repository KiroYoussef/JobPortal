import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JobListDto } from '../Models/JobListDto';
import { JobDto } from '../Models/JobDetailtsDTO';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient, private router: Router) {
  }
  Api: string = "https://localhost:7231/api/";


 

  GetJobList() {
    return this.http.get<JobListDto[]>(`${this.Api}GetJobsList?`);
  }
  GetJob(id:number) {
    return this.http.get<JobDto>(`${this.Api}GetJobDetail?id=${id}`);
  }
}
