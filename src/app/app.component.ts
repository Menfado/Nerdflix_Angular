import { Component } from '@angular/core';
import { MediaInterface } from './models/mediaInterfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public peliculasDrama: MediaInterface = {
    title: "Drama",
    media: [{
      src: "../../../assets/images/Drama/arrival.webp",
      alt: "1917"
    },
    {
      src: "../../../assets/images/Drama/corazones.webp",
      alt: ""
    },
    {
      src: "../../../assets/images/Drama/salvaralsoldado.webp",
      alt: ""
    },
    {
      src: "../../../assets/images/Drama/scarface.webp",
      alt: ""
    },
    {
      src: "../../../assets/images/Drama/schindler.webp",
      alt: ""
    }]
  };

  public peliculasTerror: MediaInterface = {
    title: "Terror",
    media: [{
      src: "../../../assets/images/Terror/calleterror.jpg",
      alt: ""
    },
    {
      src: "../../../assets/images/Terror/infiernoagua.webp",
      alt: ""
    },
    {
      src: "../../../assets/images/Terror/malasana.webp",
      alt: ""
    },
    {
      src: "../../../assets/images/Terror/multiple.webp",
      alt: ""
    },
    {
      src: "../../../assets/images/Terror/reflejos.webp",
      alt: ""
    },
    {
      src: "../../../assets/images/Terror/insidious2.webp",
      alt: ""
    },
    {
      src: "https://www.quever.news/u/fotografias/m/2021/9/30/f608x342-16388_46111_0.jpg",
      alt: ""
    },
    {
      src: "https://media.cnnchile.com/sites/2/2019/08/EERIE.jpg",
      alt: ""
    },
    {
      src: "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVBq3qvkH2-9COHtHTkiunQUB4rTnrZj-ilh4TrUYjqYegtFLuTo5Buj6rJiCoDrk0Q8IQ4oyQLO3J8XE4mNV6ZFBsQm8OTr-mLWbsCkdsYSv3Qre6PYR1P5-SodjLzBhhZR.jpg?r=9e3",
      alt: ""
    }]
  };
}