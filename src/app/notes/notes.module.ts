import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NotesComponent } from './notes.component';
import { NoteComponent } from './components/note/note.component';
import { NoteViewComponent } from './components/note-view/note-view.component';
import { DateViewerComponent } from './components/date-viewer/date-viewer.component';
import { ReminderButtonComponent } from './components/button-container/reminder-button/reminder-button.component';
import { DateInputFieldComponent } from './components/date-input-field/date-input-field.component';
import { RemoveButtonComponent } from './components/button-container/remove-button/remove-button.component';
import { ButtonContainerComponent } from './components/button-container/button-container.component';
import { ColorButtonComponent } from './components/button-container/color-button/color-button.component';
import { ImageButtonComponent } from './components/button-container/image-button/image-button.component';
import { PrintButtonComponent } from './components/button-container/print-button/print-button.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { PrintViewComponent } from './components/print-view/print-view.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { PrintViewResolve } from './components/print-view/print-view.resolve';

const routes: Routes = [
  {
    path: 'notes',
    canActivate: [AuthGuard],
    children: [
      {path: '', component: NoteListComponent},
      {path: ':id', component: PrintViewComponent, resolve: {note: PrintViewResolve}},
    ],
    component: NotesComponent
  }
]

@NgModule({
  declarations: [
    NotesComponent,
    NoteListComponent,
    NoteComponent,
    NoteViewComponent,
    DateViewerComponent,
    ReminderButtonComponent,
    DateInputFieldComponent,
    RemoveButtonComponent,
    ButtonContainerComponent,
    ColorButtonComponent,
    ImageButtonComponent,
    PrintButtonComponent,
    PrintViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NotesComponent
  ],
  providers: [ PrintViewResolve ]
})
export class NotesModule { }
