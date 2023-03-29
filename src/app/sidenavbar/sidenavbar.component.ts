import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent {

  constructor(public loginservice:LoginService){}

  

  mode = 'side';

  public sidenav: any;

}
