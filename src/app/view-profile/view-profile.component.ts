import { Component, } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  
//   url="https://material.angular.io/assets/img/examples/shiba2.jpg"
//  selectFile(event:any){
//   if(event.target.files){
//     var reader=new FileReader()
//     reader.readAsDataURL(event.target.files[0])
//     reader.onload=(event:any)=>{
//       this.url=event.target.result
//     }
//   }

//  }
constructor(private userService:UserService){}
userDetails!:any;
ngOnInit() {
  this.getUser();
}


myImage!:Observable<any>;
firstName!:String;
base64code!:any;
email!:String;
onChange=($event:Event)=>{
  const target =$event.target as HTMLInputElement;
  const file:File=(target.files as FileList)[0];
  console.log(file)
  this.convertToBase64(file)
}
convertToBase64(file:File){
  const observable = new Observable((Subscriber:Subscriber<any>)=>{
    this.readFile(file,Subscriber)
  })
observable.subscribe((d)=>{
  console.log(d)
   this.myImage=d;
  this.base64code=d;
  this.updateUser(d);
})

}
readFile(file:File,subscriber:Subscriber<any>){
  const filereader=new FileReader();
  filereader.readAsDataURL(file)
  filereader.onload=()=>{
    subscriber.next(filereader.result);
    subscriber.complete()
  }
  filereader.onerror=()=>{
    subscriber.error()
    subscriber.complete()

  }
}




getUser(){
  this.userService.getUser().subscribe(response=>{

    
    this.userDetails=response;
   this.myImage= this.userDetails.profileImage;
   this.firstName = this.userDetails.firstName;
   this.email = this.userDetails.email;
   
    
  })
  }

updateUser(profileImage:any){
  this.userService.updateProfileImage(profileImage).subscribe(response=>{
   
  })
}

}

