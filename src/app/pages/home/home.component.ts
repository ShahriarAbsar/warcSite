import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  drawerOpen: boolean = false;

  toggleDrawer(): void {
    this.drawerOpen = !this.drawerOpen;
  }
}
