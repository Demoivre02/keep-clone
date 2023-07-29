import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerificationComponent } from './auth/verification/verification.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: RegisterComponent  },
  {path: 'forgotPassword', component: ForgotPasswordComponent  },
  {path: 'verify', component: VerificationComponent},
  {path: "dashboard", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
