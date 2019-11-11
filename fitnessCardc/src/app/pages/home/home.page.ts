import { CardService } from './../../shared/services/card.service';
import { Card } from './../../shared/models/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  tab: Card[];
  constructor(private cardService: CardService) {}

  ngOnInit(){
      this.tab = this.cardService.createCardPackage('pompe','traction','gainage','chaise');
      console.log(this.tab)
  }
}
