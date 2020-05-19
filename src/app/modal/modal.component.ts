import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef, ChangeDetectorRef, ComponentFactoryResolver } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalContent: string = null;
  component: ComponentRef<any>;

  @ViewChild('entry', {read: ViewContainerRef})
  entry: ViewContainerRef;

  constructor(
    private content: ModalService,
    private ChangeDetector: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver
    ) { }

  ngOnInit(): void {
    this.content.getContent()
    .subscribe(data => {
      this.modalContent = data.msg;
      this.ChangeDetector.detectChanges();
      if(data.comp) {
        const compFactory = this.resolver.resolveComponentFactory(data.comp);
        this.component = this.entry.createComponent(compFactory);
        this.component.instance.item = data.props;
        this.component.instance.forPrimaryUse = false;
      }
      this.component.instance.close = () => {
        this.closeModal();
      }
    });
  }

  closeModal(): void {
    this.component.destroy();
    this.content.closeModal();
  }

}
