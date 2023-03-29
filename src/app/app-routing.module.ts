import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTaskComponent } from './view-task/view-task.component';
import { LoginComponent } from './login/login.component';

import { FirstPageComponent } from './first-page/first-page.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ArchiveTaskComponent } from './archive-task/archive-task.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ViewtaskGuard } from './viewtask.guard';
import { SignupComponent } from './signup/signup.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ModifyTaskComponent } from './modify-task/modify-task.component';
import { CompletedComponent } from './completed/completed.component';

const routes: Routes = [
  {
    path: 'viewtask',
    component:ViewTaskComponent,
    canActivate:[ViewtaskGuard]
  },
  {
    path: "",
    redirectTo: "/firstpage",
    pathMatch: "full"
  },
  

  {
    path: 'firstpage',
    component:FirstPageComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'addtask',
    component:AddTaskComponent,
    canActivate:[ViewtaskGuard]
  
  },
  {
    path: 'archivetask',
    component:ArchiveTaskComponent,
    canActivate:[ViewtaskGuard]
  },
  {
    path:'completed',
    component:CompletedComponent,
    canActivate:[ViewtaskGuard]

  },
  {
    path: 'signup',
    component:SignupComponent
  },
  {
    path: 'sidenavbar',
    component:SidenavbarComponent,
    canActivate:[ ViewtaskGuard]
  },
  {
    path: 'viewprofile',
    component:ViewProfileComponent,
     canActivate:[ ViewtaskGuard]
  },
  {
    path: 'modifytask',
    component:ModifyTaskComponent,
    canActivate:[ ViewtaskGuard]
  
  },
  {
    path: 'errorpage',
    component:ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
