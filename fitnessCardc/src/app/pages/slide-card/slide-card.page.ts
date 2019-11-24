import { SettingService } from './../../shared/services/setting.service';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card';
import { CardService } from 'src/app/shared/services/card.service';
import { ExercisesService } from 'src/app/shared/services/exercises.service';


@Component({
  selector: 'app-exercices',
  templateUrl: './slide-card.page.html',
  styleUrls: ['./slide-card.page.scss'],
})

export class SlideCardPage implements OnInit {

  tabCardMix: Card[];
  audio = new Audio('../../../assets/beep-09.mp3');

  constructor(private cardService: CardService, private exercisesService: ExercisesService, public settingService: SettingService) { }

  ngOnInit() {
    this.cardService.MixTable(this.cardService.tabCard);
    this.tabCardMix = this.cardService.tabCardMix;
    console.log(this.tabCardMix);
  }

  stopTimer() {
    this.exercisesService.stopTimer();
  }

}
