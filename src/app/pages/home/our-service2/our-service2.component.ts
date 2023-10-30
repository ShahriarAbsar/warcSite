import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/common/scroll.service';

@Component({
  selector: 'app-our-service2',
  templateUrl: './our-service2.component.html',
  styleUrls: ['./our-service2.component.scss']
})
export class OurService2Component {

  isTeam = 0;

  constructor(
    private scrollService: ScrollService
  ) {

  }

  ngOnInit(): void {
    this.scrollService.refreshService$.subscribe(res => {
      if (res) {
        this.onScroll();
      }
    })
  }


  /***
   * SCROLL SECTION
   * onScroll()
   */
  onScroll() {
    let el = document.getElementById('service') as HTMLElement;
    el.scrollIntoView({ behavior: "smooth", block: 'start', inline: 'nearest' })
  }

  /**
   * TEAM CONTROLL
   * onShowTeam()
   */
  onShowTeam(step: number) {
    if (step === this.isTeam) {
      this.isTeam = 0;
    } else {
      this.isTeam = step;
    }

  }


}
