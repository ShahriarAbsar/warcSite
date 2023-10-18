import { Component } from '@angular/core';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.scss']
})
export class ProjectInformationComponent {
  drawerOpen: boolean = false;

  toggleDrawer(): void {
    this.drawerOpen = !this.drawerOpen;
  }
}
