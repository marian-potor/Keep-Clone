import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, AfterContentInit, ComponentRef, ElementRef } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterContentInit {
  modalContent: string = null;
  compFactory: ComponentFactory<any>

  @ViewChild('entry', {read: ViewContainerRef})
  entry: ViewContainerRef;
  component: ComponentRef<any>;

  constructor(private content: ModalService) { }

  ngOnInit(): void {
    this.content.getContent()
    .subscribe(data => {
      this.modalContent = data.msg;
      this.compFactory = data.comp;
      console.log(data.comp);
      this.component = this.entry.createComponent(this.compFactory);
    });
  }

  ngAfterContentInit() {
    // this.content.getContent()
    // .subscribe(data => {
    //   console.log(data);
    //   this.modalContent = data.msg;
    //   this.compFactory = data.comp;
    //   console.log(data.comp);
    // });
  }

  closeModal(): void {
    this.component.destroy();
    this.content.closeModal();
  }

}
