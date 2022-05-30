import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {



  visibleSidebar1: any;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(){

    this.primengConfig.ripple = true;
  }

  displayPosition!: boolean;

  position!: string;

  showPositionDialog(position: string){

    this.position = position;
    this.displayPosition = true;

  }

}

