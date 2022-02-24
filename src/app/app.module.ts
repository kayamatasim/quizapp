import { QuestionsComponent } from './questions/questions.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { QuestionsModule } from './questions/questions.module';
import { SigninComponent } from './auth/component/signin/signin.component';
import { LoginComponent } from './auth/component/login/login.component';




@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    QuestionsModule,
    AuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
