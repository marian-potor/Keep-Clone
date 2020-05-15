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

  constructor(private content: ModalService) { }

  ngOnInit(): void {
    this.content.getContent()
    .subscribe(data => {
      console.log(data);
      this.modalContent = data.msg;
      this.compFactory = data.comp;
      this.ngAfterContentInit();
      const component = this.entry.createComponent(data.comp);
      console.log(data.comp);
    });
  }

  ngAfterContentInit(): void {
    // console.log(this.entry)
    // this.content.getContent()
    // .subscribe(data => {
    //   console.log(data);
    //   this.modalContent = data.msg;
    //   this.compFactory = data.comp;
    //   this.ngAfterContentInit();
    //   const component = this.entry.createComponent(data.comp);
    //   console.log(data.comp);
    // });
  }

  ngAfterViewInit() {
    console.log(this.entry);
  }

  closeModal(): void {
    this.content.closeModal();
  }

}
