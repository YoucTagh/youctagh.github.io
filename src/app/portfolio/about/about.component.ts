import { Component } from '@angular/core';
import { BioService } from '../../core/services/bio.service';

@Component({
  standalone: false,

  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  bio$ = this.bioService.getBio();

  respOptions = [
    { viewClasses: 'd-none d-md-flex', headingClass: 'display-3', useSmallerHeadings: false },
    { viewClasses: 'd-flex d-md-none', headingClass: '', useSmallerHeadings: true }
  ];

  constructor(private bioService: BioService) { }
}