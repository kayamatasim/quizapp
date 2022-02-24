import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestComponent } from './components/quest/quest.component';
import { RulesComponent } from './components/rules/rules.component';
import { RouterModule } from '@angular/router';

import { QuestionsService } from './questions.service';


@NgModule({
  providers:[QuestionsService],
 
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [QuestionsComponent,QuestComponent,RulesComponent]
})
export class QuestionsModule { }
