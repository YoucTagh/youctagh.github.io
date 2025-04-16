import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, mergeAll, Observable, toArray } from 'rxjs';
import { Research } from '../models/research';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(private http: HttpClient) { }

  getResearch(featured?: boolean): Observable<Research[]> {
    let research$ = this.http.get<Research[]>('json/research.json');

    if (featured) {
      return research$.pipe(
        mergeAll(),
        filter(research => research.featured || false),
        toArray()
      );
    }

    return research$;
  }
}
