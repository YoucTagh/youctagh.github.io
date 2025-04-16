import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { mergeMap } from 'rxjs';
import { HeaderService } from 'src/app/core/services/header.service';
import { TeachingService } from 'src/app/core/services/teaching.service';

@Component({
  standalone: false,

  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent {

  isHome$ = this.headerService.isHome();
  teaching$ = this.isHome$.pipe(
    mergeMap(atHome => this.teachingService.getTeaching(atHome))
  );
  activeTeaching: any

  respOptions = [
    { viewClasses: 'd-none d-md-flex', displayInColumn: false, useSmallerHeadings: false, titleClasses: 'display-3' },
    { viewClasses: 'd-flex d-md-none', displayInColumn: true, useSmallerHeadings: true, titleClasses: '' }
  ];

  closeResult = '';

  constructor(private teachingService: TeachingService, private headerService: HeaderService, private modalService: NgbModal) { }

  open(content: any, teaching: any) {
    this.activeTeaching = teaching
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
