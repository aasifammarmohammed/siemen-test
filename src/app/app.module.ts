import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './layouts/header/header.component';  
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistrationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    ToastrModule.forRoot(), 
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
