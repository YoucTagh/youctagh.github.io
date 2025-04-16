import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeAll, toArray } from 'rxjs/operators';
import { Project } from '../models/project';
import { AcademicProject } from '../models/academic-project';

@Injectable({
  providedIn: 'root'
})
export class AcademicProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(featured?: boolean): Observable<AcademicProject[]> {
    let projects$ = this.http.get<AcademicProject[]>('json/academic-projects.json');

    if (featured) {
      return projects$.pipe(
        mergeAll(),
        filter(project => project.featured || false),
        toArray()
      );
    }

    return projects$;
  }
}