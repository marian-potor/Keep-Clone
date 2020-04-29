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
import { PrintButtonComponent } from './components/button-container/print-button/print-button.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { PrintViewComponent } from './components/print-view/print-view.component';

const routes: Routes = [
  {
    path: 'notes',
    // component: NotesComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: '', component: NotesComponent},
      {path: ':id', component: PrintViewComponent},
      // {path: '**', component: NotesComponent, pathMatch: 'full'},
    ]
  }
]

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
    ImageButtonComponent,
    PrintButtonComponent
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
  providers: [ NotesService ] //imports service at this module level
})
export class NotesModule { }
