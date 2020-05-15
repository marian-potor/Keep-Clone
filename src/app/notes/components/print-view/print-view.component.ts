import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/models/note.interface';
import { ModalService } from 'src/app/services/modal.service';
import { take } from 'rxjs/operators';
import { ImageButtonComponent } from '../button-container/image-button/image-button.component';

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
      <button (click)="openModal()">Modal</button>
    </div>
  `
})

export class PrintViewComponent implements OnInit {
  note: Note;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: ModalService,
    private resolver: ComponentFactoryResolver
  ){}

  ngOnInit() {
    this.note = this.route.snapshot.data.note;
  }

  closePrintView(): void {
    this.router.navigate(['notes']);
  }

  openModal(): void {
    const formFactory = this.resolver.resolveComponentFactory(ImageButtonComponent);
    this.modal.openModal('Modal from print view', formFactory).pipe(take(1))
    // .subscribe(data => data ? null : console.log('Modal was closed'))
    .subscribe(data => console.log('Modal was closed', data))
  }
}