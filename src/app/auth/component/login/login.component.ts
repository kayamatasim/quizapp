import { Component, OnInit } from '@angular/core';

import { UserinfoService } from '../../userinfo.service';
import { Usermodel } from '../usermodel';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  userref= new FormGroup({
    username:new FormControl(),
    password:new FormControl(),
    email:new FormControl()
  })
  ActivatedRoute!: ActivatedRoute
 
  constructor(private info:UserinfoService,private http:HttpClient , private router: Router) { }



checkuser(){
  let users;
  var validuser=false;
  this.info.getusers().subscribe(data=>{
    users=JSON.stringify(data)
    let userobj=JSON.parse(users)
  
for (let user in userobj){
  
  if(userobj[user].email==this.userref.value.email && userobj[user].password==this.userref.value.password){
    validuser=true;
  }
  else{
   validuser=false;

  }
}

if(validuser==true){
  alert('welcome'+ this.userref.value.username);
  this.router.navigate(['../../', 'home'], { relativeTo: this.ActivatedRoute })

}
else{
  alert('user does not exist');
  this.router.navigate(['../', 'signin'], { relativeTo: this.ActivatedRoute })

}
  
  });
 
}
  ngOnInit() {


  }

}


