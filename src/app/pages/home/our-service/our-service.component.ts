import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/common/scroll.service';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent {

  constructor(
    private scrollService: ScrollService,
    private router: Router
  ) {

  }


  /**
   * SCROLL SECTION WITH PROJECT DETAILS
   * onScroll()
   */

  onScroll(data: number) {
    this.router.navigate(['/', 'our-warc'])
    this.scrollService.needRefreshProject$(data);
  }

}
