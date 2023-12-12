import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// route guard
const routes: Routes = [
  {path : "sign-in", component : SignInComponent},
  {path : "sign-up", component : SignUpComponent},
  {path : "profile", component : ProfileComponent},
  {path : "dashboard", component : DashboardComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}