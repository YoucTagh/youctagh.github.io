import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, mergeMap } from 'rxjs';
import { HeaderService } from 'src/app/core/services/header.service';
import { ResearchService } from 'src/app/core/services/research.service';

@Component({
  standalone: false,

  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {
  isHome$ = this.headerService.isHome();

  research$ = this.isHome$.pipe(mergeMap(atHome => this.researchService.getResearch(atHome)));
  activeResearch: any

  respOptions = [
    { viewClasses: 'd-none d-md-flex', displayInColumn: false, useSmallerHeadings: false, titleClasses: 'display-3' },
    { viewClasses: 'd-flex d-md-none', displayInColumn: true, useSmallerHeadings: true, titleClasses: '' }
  ];

  closeResult = '';

  constructor(private researchService: ResearchService, private headerService: HeaderService, private modalService: NgbModal) { }

  open(content: any, research: any) {
    this.activeResearch = research
    this.modalService.open(content, { size: 'xl', centered: true, animation: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}