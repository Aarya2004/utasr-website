import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  navitems: MenuItem[] | undefined;

    ngOnInit() {
        this.navitems = [
          {
              label: 'Home',
              style: {'margin-left': 'auto'}
          },
          {
              label: 'About Us'
          },
          {
              label: 'Rhino'
          },
          {
              label: 'Members'
          },
          {
              label: 'Contact'
          }
        ]
    }
}
