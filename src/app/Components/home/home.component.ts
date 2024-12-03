import { Component } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { JobService } from '../../Services/job.service';
import { JobListDto } from '../../Models/JobListDto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
JobList:JobListDto[]=[];

  constructor(public accountService: AccountService, public jobService: JobService) {

   this.GetJobsList();

  }

  GetJobsList(){
    this.jobService.GetJobList().subscribe(
      (res: JobListDto[]) => {
        this.JobList=res;
        console.log("res", res)
      },
      (err: any) => {
      }
    );
  }
}
