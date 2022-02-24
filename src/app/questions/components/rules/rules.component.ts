import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../questions.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  result!:number
  constructor(private question:QuestionsService) { 
    this.question.result.subscribe(sc=>{
      console.log(sc)
      this.result=sc;
    })
  }


 
  ngOnInit() {
      this.question.result.next(this.result);
  }

}
