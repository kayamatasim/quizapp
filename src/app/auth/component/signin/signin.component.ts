import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { UserinfoService } from '../../userinfo.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  [x: string]: any;

  constructor(private http: HttpClient, private info: UserinfoService, private router: Router) { }
  userref = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl()
  })

  users!: string;




  adduser() {
    let validuser = true;
    this.info.getusers().subscribe(data => {
      this.users = JSON.stringify(data);
      let usersobj = JSON.parse(this.users);
      for (let user in usersobj) {
        if (usersobj[user].email == this.userref.value.email) {
          validuser = false;
        }
      }
      console.log(validuser);
      if (validuser == true) {
        this.http.post('https://quiz-app-ad183-default-rtdb.firebaseio.com/users.json', this.userref.value).subscribe((data) => {
           this.router.navigate(['../../', 'home'], { relativeTo: this['ActivatedRoute'] })
        }, (err) => { alert(`oops got this error ${err}`) })
      }
      else {
        alert('user already exist')
      }


    })

  }
  ngOnInit() {


  }

}

