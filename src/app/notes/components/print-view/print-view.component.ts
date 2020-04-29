import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppStateService } from 'src/app/app-state.service';
import { switchMap } from 'rxjs/operators';
import { Note } from 'src/app/models/note.interface';

@Component({
  selector: 'template-view',
  template: `
    <p>Print view</p>
    <p>{{this.note?.title}}</p>
    <p>{{this.note?.content}}</p>
    <p>{{this.note?.date}}</p>
    <button (click)="closePrintView()">Back to notes</button>
  `
})

export class PrintViewComponent implements OnInit {
  noteId: string;
  note: Note;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private state: AppStateService
  ){}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(data => {this.noteId = data.id; return this.state.getUser()})
    )
    .subscribe(user => {
      this.note = user.noteList.find(note => note.id === this.noteId);
      if (!this.note) {
        this.closePrintView();
      }
    });
  }

  closePrintView(): void {
    this.router.navigate(['notes']);
  }
}