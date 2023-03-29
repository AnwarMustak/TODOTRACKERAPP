import { Component } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  exists:string="Sorry"
  message1:string="Email Doesn't Exist's"

  match:string="Sorry"
  message2:string="Email and Password Doesn't Match"
  match1:string="success"
  message:string="Login Success"
  user: User;
  isLoading:boolean=false;

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService,private fb:FormBuilder,private snackBar: MatSnackBar) {
    this.user = new User();
    this.loginForm.setValue({email:"",password:""})
  }

  

  // manus code

  ngOnInit(): void {
    
  }
  loginForm = this.fb.group({
    email : ['',[Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z]+\\.[a-z]{2,4}$')]],
    password : ['',[Validators.required]]
  });
  get email(){
    return this.loginForm.get("email")
  }
  get password(){
    return this.loginForm.get("password")
  }

responseData:any;
sendLoginData(){
  this.isLoading=true;
  console.log(this.loginForm.value);
  this.loginService.loginCheck(this.loginForm.value).subscribe(
    response=>{
      console.log(response);
      this.responseData=response;
        console.log(this.responseData.token);
        localStorage.setItem("jwt", this.responseData.token);
        localStorage.setItem("emailId",this.responseData.email);
        this.loginService.isloggedin = true;
        this.isLoading=false;
        this.snackBar.open(this.message,this.match1,{duration:3000})
        this.router.navigateByUrl("/viewtask")
        // Swal.fire("Congrats!", "Login Success", "success");
        },
        (err:Error)=>{
          if(err.message.endsWith("404 ok")){
            this.snackBar.open(this.message1,this.exists,{duration:3000})
            this.isLoading=false;
          }else{
            this.snackBar.open(this.message2,this.match,{duration:3000})
            this.isLoading=false;
          }
          
        })
      }

}
