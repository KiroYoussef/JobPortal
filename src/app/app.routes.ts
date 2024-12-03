import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { JobDetailComponent } from './Components/job-detail/job-detail.component';
import { ApplyFormComponent } from './Components/apply-form/apply-form.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {
    path: 'home', // Make sure the path is lowercase 'home'
    component: HomeComponent
  }, 
   { path: 'Job/:id', component: JobDetailComponent }, // Defines the 'Apply' route with a parameter
   { path: 'Apply/:id', component: ApplyFormComponent }, // Defines the 'Apply' route with a parameter

  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to /home by default
];
