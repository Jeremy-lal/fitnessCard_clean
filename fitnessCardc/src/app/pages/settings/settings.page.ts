import { SettingService } from './../../shared/services/setting.service';
import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/shared/services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  multiplicatorTimetab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  multiplicatorTime: number;

  multiplicatorRepTab = [1, 2, 3, 4, 5, 6];
  multiplicatorRep: number;

  tabLangue = ['Français', 'English'];
  chooseLangue = 'Français';

  constructor(private cardService: CardService, private router: Router, private settingService: SettingService) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }
  sendNewSettings() {
    this.settingService.language = this.chooseLangue;
    // this.cardService.repetition = this.multiplicatorRep;
    // this.cardService.timeMultiplier = this.multiplicatorTime;
    // console.log(this.cardService.repetition);
    // console.log(this.cardService.timeMultiplier);
  }
}
