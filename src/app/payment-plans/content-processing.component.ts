import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'content-processing',
  template: 
  `
    <p *ngIf="!icon">{{ content | textTransform }}</p>
    <fa-icon *ngIf="icon" [icon]="icon" [style.color]="color"></fa-icon>
  `
})
export class ContentProcessingComponent implements OnInit {
  availableIcon: IconDefinition = faCheck;
  notAvailableIcon: IconDefinition = faTimes;
  icon: IconDefinition;
  color: string;

  @Input()
  content: string;

  ngOnInit() {
    if (this.content === "V") {
      this.icon = this.availableIcon;
      this.color = 'rgb(6, 192, 167)';
    }
    if (this.content === "X") {
      this.icon = this.notAvailableIcon;
      this.color = 'rgb(249, 49, 89)';
    } 
  }
}