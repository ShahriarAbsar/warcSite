import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/common/carousel.service';
import { ScrollService } from 'src/app/services/common/scroll.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

    constructor(
      public carouselCntrlService:CarouselService,
      private scrollService:ScrollService
    ){

    }

    ngOnInit(): void {
         this.scrollService.refreshTeam$.subscribe(res => {
              if(res){
                   this.onScroll();
              }
         })
    }




    /***
     * SCROLL SECTION WITH TRIGGER MENU
     * onScrol()
     */
    onScroll(){
        let el = document.getElementById('team') as HTMLElement;
        el.scrollIntoView({behavior:"smooth",block:'start',inline:'nearest'})
    }
























    teamData1 = [
      {
         _id:"1",
         name:"Fayek",
         image:"https://pps.whatsapp.net/v/t61.24694-24/350290990_1299373564121006_1952119893102099204_n.jpg?ccb=11-4&oh=01_AdQH_4gaElxUJU5wuh9unR78RPU7IIDGeEIk8eGtZbd2CA&oe=65459284&_nc_sid=000000&_nc_cat=101"
      },
      {
        _id:"2",
        name:"Nihal",
        image:"https://pps.whatsapp.net/v/t61.24694-24/231097966_581126352890871_5500000481768147730_n.jpg?ccb=11-4&oh=01_AdQOmNR9iCnLkpz5F9oFThtR_tjjPM3vPgWSI4hiZAu2kA&oe=654C4E37&_nc_sid=000000&_nc_cat=106"
      },
      {
       _id:"3",
       name:"Xenon",
       image:"https://pps.whatsapp.net/v/t61.24694-24/342003158_938590910671963_4002950432339235840_n.jpg?ccb=11-4&oh=01_AdTsDdT9seEpzj60-hj-9L308dixBVlBeHd5X6t2lyIYqg&oe=65459E4A&_nc_sid=000000&_nc_cat=101"
      },
      {
        _id:"4",
        name:"Tasnim",
        image:"https://pps.whatsapp.net/v/t61.24694-24/319928360_720814009457754_352635792834346249_n.jpg?ccb=11-4&oh=01_AdRQP3fvb7k0PLxhPCR6v_f4hAm8rDrCVUoym7V9_YFWwQ&oe=65436C7D&_nc_sid=000000&_nc_cat=111"
      }
 ]

}
