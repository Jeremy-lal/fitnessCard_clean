import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/shared/services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  multiplicatorTime: number;
  multiplicatorRep: number;

  tabLangue = ['Français', 'English'];
  chooseLangue: string;

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }
  // sendNewSettings() {
  //   this.cardService.repetition = this.multiplicatorRep;
  //   this.cardService.timeMultiplier = this.multiplicatorTime;
  //   console.log(this.cardService.repetition);
  //   console.log(this.cardService.timeMultiplier);
  // }
}
