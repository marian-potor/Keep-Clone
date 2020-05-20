import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Component } from '@angular/compiler/src/core';

@Injectable({providedIn: 'root'})
export class ModalService {
  private subject = new Subject<string>();
  private content = this.subject.asObservable();

  openModal(msg: string, comp: any, props: any): Observable<string> {
    this.subject.next({msg, comp, props});
    return this.content.pipe(
      pluck('msg')
    )
  }

  getContent(): Observable<any> {
    return this.content;
  }

  closeModal() {
    this.subject.next({});
  }
}