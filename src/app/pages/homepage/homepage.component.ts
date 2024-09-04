import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleriaComponent } from './components/galleria/galleria.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, GalleriaComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
