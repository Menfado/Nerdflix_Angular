import { Component, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/models/mediaInterfaces';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
public heroInfo:HeroInterface;


  constructor() { 
    this.heroInfo= {
      title: "Top 5 en España hoy",
      media:[{
        src: "../../../assets/images/Top10/1.png",
        alt: "stranger"
      },
      {
        src:"../../../assets/images/Top10/2.png",
        alt:"entrevias"
      },

      {
        src:"../../../assets/images/Top10/3.png",
        alt:"café"
      },

      {
        src:"../../../assets/images/Top10/4.png",
        alt:"madre"
      },

      {
        src:"../../../assets/images/Top10/5.png",
        alt:"abogado"

      }]
    }
  }

  ngOnInit(): void {
  }

}
