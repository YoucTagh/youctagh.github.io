import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, mergeAll, Observable, toArray } from 'rxjs';
import { Teaching } from '../models/teaching';

@Injectable({
  providedIn: 'root'
})
export class TeachingService {

  constructor(private http: HttpClient) { }

  getTeaching(featured?: boolean): Observable<Teaching[]> {
    let teaching$ = this.http.get<Teaching[]>('assets/json/teaching.json')

    if (featured) {
      return teaching$.pipe(
        mergeAll(),
        filter(teaching => teaching.featured || false),
        toArray()
      );
    }

    return teaching$;
  }
}
