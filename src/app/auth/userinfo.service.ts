import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

constructor(private http:HttpClient) { 

  this.http.get('https://quiz-app-ad183-default-rtdb.firebaseio.com/users.json').subscribe(data=>{
    this.users=data;
  })

}
users:any;

getusers(){
 
return this.http.get('https://quiz-app-ad183-default-rtdb.firebaseio.com/users.json');

}




}

