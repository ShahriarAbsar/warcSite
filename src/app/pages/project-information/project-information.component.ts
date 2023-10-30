import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollService } from 'src/app/services/common/scroll.service';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.scss']
})
export class ProjectInformationComponent implements OnInit {
  drawerOpen: boolean = false;


  constructor(
    private scrollService: ScrollService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.scrollService.refreshWarc$.subscribe((res) => {
      if (res) {
        setTimeout(() => {
          this.onScroll();
        }, 500)
      }
    })
    this.scrollService.refreshProject$.subscribe((res:any) => {
      if (res) {
        setTimeout(() => {
          this.onScrollProject(res);
        }, 500)
      }
    })
  }


  toggleDrawer(): void {
    this.drawerOpen = !this.drawerOpen;
  }


  /***
  * SCROLL SECTION
  * onScroll()
  */
  onScroll() {
    let el = document.getElementById('warc') as HTMLElement;
    el.scrollIntoView({ behavior: "smooth", block: 'start', inline: 'nearest' });
  }

  onScrollProject(id:number){
    let el = document.getElementById(`${id}`) as HTMLElement;
    el.scrollIntoView({ behavior: "smooth", block: 'start', inline: 'nearest' });
  }



  /**
 * SECTION SCROLL CONTROLLING
 * onScrollControll()
 */

  public onScrollControll(type: string) {
    if (type == 'warc') {
      this.onScroll();
    };
    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        setTimeout(() => {
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
          }
        }, 500)
      }
    })
    this.drawerOpen = false;
  }

}
