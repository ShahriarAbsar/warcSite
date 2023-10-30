import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/common/scroll.service';

@Component({
  selector: 'app-warc-details',
  templateUrl: './warc-details.component.html',
  styleUrls: ['./warc-details.component.scss']
})
export class WarcDetailsComponent {
  isChecked = false;
  isAnimation = false;

  constructor(
    private scrollService: ScrollService
  ) {

  }

  ngOnInit(): void {
    this.scrollService.refreshContact$.subscribe(res => {
      if (res) {
        this.onScroll();
      }
    })

    setInterval(() => {
         this.isAnimation = !this.isAnimation;
    },4000)
  }


  /***
   * SCROLL SECTION
   * onScroll()
   */
  onScroll() {
    let el = document.getElementById('contact') as HTMLElement;
    el.scrollIntoView({ behavior: "smooth", block: 'start', inline: 'nearest' })
  }

}
