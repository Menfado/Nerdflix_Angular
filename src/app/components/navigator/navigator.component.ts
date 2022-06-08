import { Component, OnInit } from '@angular/core';
import { NavigatorInterface } from 'src/app/models/mediaInterfaces';



@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  public navigatorInfo: NavigatorInterface;


  constructor() { 

    this.navigatorInfo = {
      logo: {
        src: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
        alt: "Netflix Logo"
      },
    links: [{
      text: "Inicio",
      link: "#inicio"
    },
    {
      text: "Buscar",
      link: "#buscar"
    }]
    }
  }

  ngOnInit(): void {
  }

}
