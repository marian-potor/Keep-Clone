import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, AfterContentInit, ComponentRef, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalContent: string = null;
  compFactory: ComponentFactory<any>
  component: ComponentRef<any>;

  @ViewChild('entry', {read: ViewContainerRef})
  entry: ViewContainerRef;

  constructor(
    private content: ModalService,
    private ChangeDetector: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.content.getContent()
    .subscribe(data => {
      this.modalContent = data.msg;
      this.compFactory = data.comp;
      this.ChangeDetector.detectChanges();
      this.component = this.entry.createComponent(this.compFactory);
    });
  }

  closeModal(): void {
    this.component.destroy();
    this.content.closeModal();
  }

}
