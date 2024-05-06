import { Component } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { HeaderService } from '../../core/services/header.service';
import { AcademicProjectsService } from 'src/app/core/services/academic-projects.service';

@Component({
  selector: 'app-academic-projects',
  templateUrl: './academic-projects.component.html',
  styleUrls: ['./academic-projects.component.css']
})
export class AcademicProjectsComponent {
  isHome$ = this.headerService.isHome();
  projects$ = this.isHome$.pipe(
    mergeMap(atHome => this.academicProjectService.getProjects(atHome))
  );

  respOptions = [
    { viewClasses: 'd-none d-md-flex', displayInColumn: false, useSmallerHeadings: false, titleClasses: 'display-3' },
    { viewClasses: 'd-flex d-md-none', displayInColumn: true, useSmallerHeadings: true, titleClasses: '' }
  ];

  constructor(private academicProjectService: AcademicProjectsService, private headerService: HeaderService) { }
}