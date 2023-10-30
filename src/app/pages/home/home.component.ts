import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/common/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  drawerOpen: boolean = false;

  constructor(
    private scrollService: ScrollService,
    private router: Router
  ) {

  }

  toggleDrawer(): void {
    this.drawerOpen = !this.drawerOpen;
  }

  /**
   * SECTION SCROLL CONTROLLING
   * onScrollControll()
   */

  public onScrollControll(type: string) {
    switch (true) {
      case type === 'team':
        this.scrollService.needRefreshTeam$(true);
        break;
      case type === 'service':
        this.scrollService.needRefreshService$(true);
        break;
      case type === 'contact':
        this.scrollService.needRefreshContact$(true);
        break;
      case type === 'warc':
        this.scrollService.needRefreshWarc$(true);
        this.router.navigate(['/', 'our-warc'])
        break;
    }
    this.drawerOpen = false;
  }
}
