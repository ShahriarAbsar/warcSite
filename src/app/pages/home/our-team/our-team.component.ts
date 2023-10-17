import { Component } from '@angular/core';
import { CarouselService } from 'src/app/services/common/carousel.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent {
    constructor(
      public carouselCntrlService:CarouselService
    ){

    }
}
