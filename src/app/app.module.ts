import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';
import { HeaderComponent } from './header/header.component';
import { ModalModule } from './modal/modal.module';
import { HomePageComponent } from './home/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PaymentPlansModule } from './payment-plans/payment-plans.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NotesModule,
    UsersModule,
    ModalModule,
    PaymentPlansModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
