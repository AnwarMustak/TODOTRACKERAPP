import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { SidenavbarComponent } from '../sidenavbar/sidenavbar.component';
import { ViewTaskComponent } from '../view-task/view-task.component';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { ViewProfileComponent } from '../view-profile/view-profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mode = new FormControl('over' as MatDrawerMode);

  constructor(public loginservice:LoginService,private router:Router, private userService:UserService) {
    
   
  }
  ngOnInit() {
    this.getUser();
    this.userService.getRefresh().subscribe(Response=>{
      this.getUser();
    })
    
  }
  userDetails!:any;
  myImage!:Observable<any>;
  
  logout()
  {
    
    this.loginservice.logout();
    this.router.navigate(['/login']);

  }
  
  

  getUser(){
    
    this.userService.getUser().subscribe(response=>{
  
      this.userDetails=response;

      
      
      
      
    })
    }

}
