import { Component, HostListener } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  standalone: false,

  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  navBarFixed: boolean = false;

  menuItems = [
    { title: 'Home', homePath: '/', fragment: 'home', pagePath: '/' },
    { title: 'About Me', homePath: '/', fragment: 'about', pagePath: '/about' },
    { title: 'My Research', homePath: '/', fragment: 'research', pagePath: '/research' },
    { title: 'My Teaching', homePath: '/', fragment: 'teaching', pagePath: '/teaching' },
    { title: 'Academic Projects', homePath: '/', fragment: 'academic-projects', pagePath: '/academic-projects' },
    { title: 'Programming Projects', homePath: '/', fragment: 'projects', pagePath: '/projects' },
  ];

  constructor(private bioService: BioService, private headerService: HeaderService) { }

  @HostListener('document:scroll')
  onscroll() {
    this.navBarFixed = (document.documentElement.scrollTop > 10)
  }
}