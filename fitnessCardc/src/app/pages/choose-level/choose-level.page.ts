import { CardService } from 'src/app/shared/services/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-level',
  templateUrl: './choose-level.page.html',
  styleUrls: ['./choose-level.page.scss'],
})

export class ChooseLevelPage implements OnInit {

  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit() {
  }

  level1() {
    this.cardService.multiplicatorTime = 2;
    this.cardService.multiplicatorRep = 1;
  }
  level2() {
    this.cardService.multiplicatorTime = 4;
    this.cardService.multiplicatorRep = 1;
  }
  level3() {
    this.cardService.multiplicatorTime = 6;
    this.cardService.multiplicatorRep = 1;
  }
  level4() {
    this.cardService.multiplicatorTime = 8;
    this.cardService.multiplicatorRep = 2;
  }
  level5() {
    this.cardService.multiplicatorTime = 10;
    this.cardService.multiplicatorRep = 2;
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }
}
