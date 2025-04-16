import { Component } from '@angular/core';
import { BioService } from '../../core/services/bio.service';

@Component({
  standalone: false,

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bio$ = this.bioService.getBio();

  respOptions = [
    { viewClasses: 'd-none d-md-flex', headingClass: 'display-4', useSmallerHeadings: false },
    { viewClasses: 'd-flex d-md-none', headingClass: '', useSmallerHeadings: true }
  ];

  workOptions = [
    { title: "See My Research", fragment: "research", },
    { title: "See My Teaching", fragment: "teaching", },
    { title: "See My Projects", fragment: "projects", }
  ]

  constructor(private bioService: BioService) { }
}