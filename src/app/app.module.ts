import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http'; // Import HttpClientModule
import { authInterceptor } from './Interceptors/auth.interceptor';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule ,CommonModule
  ],
  providers: [    provideHttpClient(withInterceptors([authInterceptor]))
],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
