import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

interface ImageObject {
  src: string,
  alt: string,
  title: string
}

@Component({
  selector: 'app-galleria',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './galleria.component.html',
  styleUrl: './galleria.component.css'
})

export class GalleriaComponent implements OnInit {
  // ****************** Placeholder images ******************
  images: ImageObject[] | undefined;
  
  ngOnInit(){
    this.images = [
      {
        src: "/UTASRlogo_B_NBkgnd.png",
        alt: "Logo without Backgnd",
        title: "Logo w/o Background"
      },
      {
        src: "/UTASRlogo.png",
        alt: "Logo with Backgnd",
        title: "Logo"
      }
    ];
  }

}
