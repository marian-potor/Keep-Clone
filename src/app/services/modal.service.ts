import { Injectable, ComponentFactory } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ModalService {
  private subject = new Subject<any>();
  private content = this.subject.asObservable();

  openModal(msg: string, comp: ComponentFactory<any>): Observable<any> {
    this.subject.next({msg: msg, comp: comp});
    return this.content
  }

  getContent(): Observable<any> {
    return this.content;
  }

  closeModal() {
    this.subject.next({msg: null, comp: null});
  }
}