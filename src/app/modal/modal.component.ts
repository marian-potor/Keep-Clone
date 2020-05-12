import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-modal',
  styleUrls: ['modal.component.scss'],
  template:`
    <div>
      <h1>Modal works</h1>
      <a [routerLink]="['', {outlets: {modal: null} }]">Modal</a>
      <div>
  `
})

export class ModalComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private state: AppStateService
    ){}

  ngOnInit(): void {
    this.route.params.subscribe(data => console.log(data))
    // console.log(this.route.snapshot.params)
  }

  ngOnDestroy(): void {
    this.state.setParam(this.route.snapshot.params.prev)
  }
}
