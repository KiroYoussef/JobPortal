import { Component, OnInit } from '@angular/core';
import { JobListDto } from '../../Models/JobListDto';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { JobDto } from '../../Models/JobDetailtsDTO';
import { JobService } from '../../Services/job.service';

@Component({
  selector: 'app-job-detail',
  imports: [CommonModule,RouterModule],

  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent  implements OnInit {
  constructor( public jobService: JobService, private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.jobId = +params.get('id')!; // Get the job ID from the URL
      this.GetJobDetails();
    });
  }
 
  selectedJob:any;
  jobId:number=0;

  GetJobDetails(){
  

    this.jobService.GetJob(this.jobId).subscribe(
      (res: JobDto) => {
        this.showJobDetails(res);
      },
      (err: any) => {
      }
    );
  }
  
  showJobDetails(job: JobDto) {
    this.selectedJob = job;
  }

  // closeJobDetails() {
  //   this.selectedJob = {};
  // }
}
