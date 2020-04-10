import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { NotesComponent } from './notes.component';
import { NoteComponent } from './components/note.component';
import { NoteViewComponent } from './components/note-view/note-view.component';
import { NotesService } from './notes.service';
import { DateViewerComponent } from './components/date-viewer/date-viewer.component';
import { ReminderButtonComponent } from './components/reminder-button.component';



@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
    NoteViewComponent,
    DateViewerComponent,
    ReminderButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    NotesComponent
  ],
  providers: [ NotesService ] //imports service at this module level
})
export class NotesModule { }
