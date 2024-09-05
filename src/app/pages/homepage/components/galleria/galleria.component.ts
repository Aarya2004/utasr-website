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
        src: "/galleriaAssets/CAR1.jpg",
        alt: "Car UT-00 Pic1",
        title: "Car UT-00 Pic1"
      },
      {
        src: "/galleriaAssets/CAR2.jpg",
        alt: "Car UT-00 Pic2",
        title: "Car UT-00 Pic2"
      },
      {
        src: "/galleriaAssets/CAR4.jpg",
        alt: "Car UT-00 Pic3",
        title: "Car UT-00 Pic3"
      },
      { 
        src: "/galleriaAssets/CAR7.jpg",
        alt: "Car UT-00 Pic4",
        title: "Car UT-00 Pic4"
      },
      {
        src: "/galleriaAssets/GIF.gif",
        alt: "GIF of car",
        title: "GIF of car"
      }
    ];
  }

}
