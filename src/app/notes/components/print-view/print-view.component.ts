import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/models/note.interface';

@Component({
  selector: 'template-view',
  styleUrls: ['./print-view.component.scss'],
  template: `
    <div class="print-section">
      <h1>Note</h1>
      <p><span class="template">Title: </span>{{note.title}}</p>
      <p><span class="template">Content: </span>{{note.content}}</p>
      <p><span class="template">Reminder: </span>{{note.date | date:'MMMM d, y, h:mm a'}}</p>
      <p><span class="template">Id: </span>{{note.id}}</p>
    </div>
    <div class="button-container">
      <button (click)="closePrintView()">&laquo;Back to notes</button>
      <button onClick="window.print()">Print note</button>
    </div>
  `
})

export class PrintViewComponent implements OnInit {
  note: Note
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.note = this.route.snapshot.data.note
  }

  closePrintView(): void {
    this.router.navigate(['notes']);
  }
}