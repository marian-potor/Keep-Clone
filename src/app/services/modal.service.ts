import { Injectable, ComponentFactory } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ModalService {
  private subject = new Subject<string>();
  private content = this.subject.asObservable();

  openModal(msg: string): Observable<string> {
    this.subject.next(msg);
    return this.content
  }

  getContent(): Observable<any> {
    return this.content;
  }

  closeModal() {
    this.subject.next(null);
  }
}