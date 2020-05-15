import { Injectable, ComponentFactory } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ModalService {
  private subject = new Subject<any>();
  private content = this.subject.asObservable();

  openModal(msg: string, comp: ComponentFactory<any>): Observable<string> {
    this.subject.next({msg: msg, comp: comp});
    return this.content.pipe(
      pluck('msg')
    )
  }

  getContent(): Observable<any> {
    return this.content;
  }

  closeModal() {
    this.subject.next({msg: null});
  }
}