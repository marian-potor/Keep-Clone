import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, AfterContentInit, ComponentRef, ElementRef } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalContent: string = null;
  compFactory: ComponentFactory<any>

  @ViewChild('entry', {read: ViewContainerRef})
  entry: ViewContainerRef;

  constructor(private content: ModalService) { }

  ngOnInit(): void {
    this.content.getContent()
    .subscribe(data => {
      this.modalContent = data;
    });
  }

  closeModal(): void {
    this.content.closeModal();
  }

}
