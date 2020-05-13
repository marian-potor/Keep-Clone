import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Note } from 'src/app/models/note.interface';
import { AppStateService } from 'src/app/services/app-state.service';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable()
export class PrintViewResolve implements Resolve<Note> {
  constructor(private state: AppStateService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Note> {    
    return this.state.getNote(route.paramMap.get('id')).pipe(
      take(1),
      tap(note => !note ? this.router.navigate(['notes']) : null)
    )
  }
}