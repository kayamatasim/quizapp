import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../questions.service';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Questmodel } from '../../questmodel';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {
q!:Questmodel[];
qnum:number=0;
qref!:FormGroup;
min!:number;
sec!:number;

ifdisabled:boolean=false;
  ActivatedRoute: ActivatedRoute | null | undefined;
  constructor(private questions:QuestionsService,public form:FormBuilder,private router:Router,private http:HttpClient) {
    this.q=this.questions.questions
    this.qref=form.group({});
  }





next(){
  if(this.qnum<this.q.length){
  this.qnum+=1
  }
}
  
back(){
  if(this.qnum>-1){
  this.qnum-=1
  }
}
  ngOnInit() {
      this.q.forEach(q=>{
        if(this.qref!=undefined){
          this.qref?.addControl(q.question,this.form.control('',[Validators.required]))
        }
      })

      let min=14;
      let sec=59
     let a= setInterval(()=>{
        sec=sec-1
        if(sec<=0){
          min=min-1;
          sec=60
        }
        this.min=min
        this.sec=sec
if(min<=0){
  this.sec=0
  console.log('times over')
this.submitquiz(this.qref)
clearInterval(a)
}
        
        },1000)
  }


  submitquiz(qref:any){
    let score=0;
     let result=qref.value;
   let answersList=Object.values(result);
   console.log(answersList)
   answersList.forEach(a=>{
        if (a==this.q[answersList.indexOf(a)].answer){
            score+=1;
        }
   })
     
   console.log(score)
   
   this.questions.result.next(score)
   this.ifdisabled=true;
  // this.router.navigate(['../../', 'home'], { relativeTo: this.ActivatedRoute })
     }

}
