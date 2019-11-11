import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card';
import { CardService } from 'src/app/shared/services/card.service';
import { ExercisesService } from 'src/app/shared/services/exercises.service';


@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.page.html',
  styleUrls: ['./exercices.page.scss'],
})

export class ExercicesPage implements OnInit {

  tabCardMix: Card[];

  constructor(private cardService: CardService, private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.cardService.MixTable(this.cardService.tabCard);
    this.tabCardMix = this.cardService.tabCardMix;
  }

  stopTimer() {
    this.exercisesService.stopTimer();
  }
}
