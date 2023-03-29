import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import swal from 'sweetalert2'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  failure:string="Sorry"
  message2:string="Email already registered with us try login"
  isLoading:boolean=false;
 
 constructor(private router:Router,private registerService:RegisterService,private fb:FormBuilder,private snackbar:MatSnackBar){}
  ngOnInit(): void {
    
  }

  signupForm = this.fb.group({
    firstName:['',[Validators.required, Validators.maxLength(10), Validators.minLength(4), Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
  lastName:['', [Validators.required, Validators.maxLength(10), Validators.minLength(3), Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
  email:['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z]+\\.[a-z]{2,4}$')]],
  otp:[''],
  password:['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    });
    get firstName(){
      return this.signupForm.get('firstName')
    }
    get lastName(){
      return this.signupForm.get('lastName')
    }
    get email(){
      return this.signupForm.get('email')
    }
    get otp(){
      return this.signupForm.get('otp')
    }
    get password(){
      return this.signupForm.get('password')
    }

    sendEmailData(){
      this.registerService.sendOtp(this.signupForm.value.email).subscribe(
        response=>{

          this.snackbar.open("OTP sent to your email!","OK",{duration:3000});
        }
      )
    }

    sendSignupData(){
      this.isLoading=true;
      console.log(this.signupForm.value);
      this.registerService.registerUser(this.signupForm.value).subscribe(
        response=>{
          // alert("Sign Up Successfull !!!");         
          // swal.fire("Congrats!"," Your account is created!", "success");
          this.snackbar.open("Your account is created!","success",{duration:3000});
          this.signupForm.reset();
          this.isLoading=false;
          this.router.navigate(['login']);
          },(err:Error)=>{
            this.isLoading=false;
            this.snackbar.open("Invalid otp or User already registered","Ok",{duration:3000})
          })
  
  }

}
