import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/models/note.interface';
import { ModalService } from 'src/app/services/modal.service';
import { take } from 'rxjs/operators';
import { NoteComponent } from '../note/note.component';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
      <button (click)="openModal()">View original note</button>
      <button onClick="window.print()">Print note</button>
      <button (click)="generatePdf()">Download note</button>
    </div>
  `
})

export class PrintViewComponent implements OnInit {
  note: Note;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: ModalService,
  ){}

  ngOnInit() {
    this.note = this.route.snapshot.data.note;
  }

  closePrintView(): void {
    this.router.navigate(['notes']);
  }

  openModal(): void {
    this.modalService.openModal('Original note', NoteComponent, this.note).pipe(take(1))
    // .subscribe(data => data ? null : console.log('Modal was closed'))
    .subscribe(data => console.log('Modal was closed', data))
  }

  generatePdf(){
    const documentDefinition = { 
      content: [
        {
          margin: [0, 150, 0, 0],
          table: {
            widths: [500],
            body: [
              [[
                {
                text: 'Note',
                alignment: 'center',
                fontSize: 20,
                margin: [0, 10, 0, 20]
                },
                {
                  style: 'column',
                  columns: [{style: 'key', width: 70, text: 'Title:'}, {style: 'value', width: 400, text: this.note.title}]
                },
                {
                  style: 'column',
                  columns: [{style: 'key', width: 70, text: 'Content:'}, {style: 'value', width: 400, text: this.note.content}]
                },
                {
                  style: 'column',
                  columns: [{style: 'key', width: 70, text: 'Reminder:'}, {style: 'value', width: 400, text: this.note.date }]
                },
                {
                  style: 'column',
                  columns: [{style: 'key', width: 70, text: 'Id:'}, {style: 'value', width: 400, qr: this.note.id }]
                }
              ]]
            ]
          },
          alignment: 'center'
        }
      ],
      styles: {
        column: {
          margin: [0, 5, 0, 5]
        },
        key: {
          bold: true,
          alignment: 'right',
        },
        value: {
          alignment: 'left'
        }
      },
      defaultStyle: {
        columnGap: 20
      }
    };
    // pdfMake.createPdf(documentDefinition).open();
    pdfMake.createPdf(documentDefinition).download();
  }
}