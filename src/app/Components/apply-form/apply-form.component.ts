import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApplicationDto } from '../../Models/ApplicationDto ';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApplicationService } from '../../Services/application.service';

@Component({
  selector: 'app-apply-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './apply-form.component.html',
  styleUrl: './apply-form.component.css'
})
export class ApplyFormComponent {
  applicationForm: FormGroup;
  jobId: number = 0;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, public _ApplicationService: ApplicationService, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.jobId = +params.get('id')!; // Get the job ID from the URL
    }); 1
    this.applicationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]]

    });
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      var applicationData: ApplicationDto = this.applicationForm.value;
      applicationData.jobId = this.jobId;
      console.log('Application Submitted:', applicationData);
      this._ApplicationService.SaveApplication(applicationData)

    }
  }
} 
