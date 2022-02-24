import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
// import { Subject } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
   result!:number;
  constructor(private questions:QuestionsService) { 
    this.questions.result.subscribe(re=>{
      this.result=re;
    })
  }

  ngOnInit() {
  }

}
