import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NotesComponent } from './notes.component';
import { NoteComponent } from './components/note/note.component';
import { NoteViewComponent } from './components/note-view/note-view.component';
import { NotesService } from './notes.service';
import { DateViewerComponent } from './components/date-viewer/date-viewer.component';
import { ReminderButtonComponent } from './components/button-container/reminder-button/reminder-button.component';
import { DateInputFieldComponent } from './components/date-input-field/date-input-field.component';
import { RemoveButtonComponent } from './components/button-container/remove-button/remove-button.component';
import { ButtonContainerComponent } from './components/button-container/button-container.component';
import { ColorButtonComponent } from './components/button-container/color-button/color-button.component';
import { ImageButtonComponent } from './components/button-container/image-button/image-button.component';



@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
    NoteViewComponent,
    DateViewerComponent,
    ReminderButtonComponent,
    DateInputFieldComponent,
    RemoveButtonComponent,
    ButtonContainerComponent,
    ColorButtonComponent,
    ImageButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    NotesComponent
  ],
  providers: [ NotesService ] //imports service at this module level
})
export class NotesModule { }
