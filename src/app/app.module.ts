import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NotesModule,
    UsersModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
