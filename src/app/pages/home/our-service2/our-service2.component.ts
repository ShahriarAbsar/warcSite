import { Component } from '@angular/core';

@Component({
  selector: 'app-our-service2',
  templateUrl: './our-service2.component.html',
  styleUrls: ['./our-service2.component.scss']
})
export class OurService2Component {
  isTeam = 0;

  /**
   * TEAM CONTROLL FUNCTIONALITY
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
