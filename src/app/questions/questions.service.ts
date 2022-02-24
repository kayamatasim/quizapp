import { Questmodel } from './questmodel';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

constructor() { }

questions:Questmodel[]=[
  {
    question:" JavaScript is the programming language of the _____.",
    opt1:"desktop",
    opt2:"mobile",
    opt3:"web",
    opt4:"server",
    answer:"web"
    
  },
  {
    question:"  Which type oflanguage  JavaScript  is _____",
    opt1:"object-oriented",
    opt2:"object based",
    opt3:"functional programming",
    opt4:"all the above",
    answer:'object based'
  }
  
]


result:Subject<number>= new Subject<number>()



}
