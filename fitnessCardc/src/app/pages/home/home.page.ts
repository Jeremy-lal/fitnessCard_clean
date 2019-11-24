import { SettingService } from './../../shared/services/setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(public settingService: SettingService) {}

  ngOnInit() {

  }

  changeToFranch() {
      this.settingService.language = 'Français';
  }

  changeToEnglish() {
    this.settingService.language = 'English';
  }
}
