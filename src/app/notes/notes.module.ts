import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { NotesComponent } from './notes.component';
import { NoteComponent } from './components/note.component';
import { NewNoteComponent } from './components/new-note.component';



@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
    NewNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    NotesComponent
  ]
})
export class NotesModule { }
