import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/models/note.interface';

@Component({
  selector: 'template-view',
  styleUrls: ['./print-view.component.scss'],
  template: `
    <div class="print-section">
      <p>Print view</p>
      <p>{{note?.title}}</p>
      <p>{{note?.content}}</p>
      <p>{{note?.date}}</p>
    </div>
    <button (click)="closePrintView()">Back to notes</button>
    <button onClick="window.print()">Print</button>
  `
})

export class PrintViewComponent implements OnInit {
  note: Note
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
    this.note = this.route.snapshot.data.note
  }

  closePrintView(): void {
    this.router.navigate(['notes/4']);
  }
}