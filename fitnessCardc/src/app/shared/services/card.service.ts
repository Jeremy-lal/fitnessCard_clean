import { Exercise } from './../models/exercise';
import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  tabCard: Card[] = [];
  tabCardMix: Card[];

  multiplicatorTime: number;
  multiplicatorRep: number;

  constructor() { }

  createCardPackage(trefle: Exercise, coeur: Exercise, carreau: Exercise, pique: Exercise,
                    multiplicatorTime: number, multiplicatorRep: number): Card[] {

    for (let i = 1; i <= 4; i++) {
      let color;
      let exercise: Exercise;

      if (i === 1) {
        color = 'trefle';
        exercise = trefle;
      } else if (i === 2) {
        color = 'coeur';
        exercise = coeur;
      } else if (i === 3) {
        color = 'carreau';
        exercise = carreau;
      } else {
        color = 'pique';
        exercise = pique;
      }

      for (let j = 1; j <= 13; j++) {
        const newCard: Card = new Card();
        newCard.color = color;
        newCard.exercise = exercise;
        if (j <= 10) {
          newCard.repetition = j * multiplicatorRep;
          newCard.time = j * multiplicatorTime;
        } else {
          newCard.repetition = 10;
          newCard.time = 10 * multiplicatorTime;
        }
        newCard.img = `../../assets/${color}/${j}-${color}.png`;

        this.tabCard.push(newCard);
      }
    }
    return this.tabCard;
  }

  MixTable(tabentre) {
    let Nbr = tabentre.length;
    let Tab = new Array();
    Tab = Tab.concat(tabentre);

    while (Nbr > 0) {
      const num = Math.floor(Math.random() * Nbr);
      Nbr--;
      const szTmp = Tab[num];

      for (let i = num; i < Nbr; i++) {
        Tab[i] = Tab[i + 1];
      }

      Tab[Nbr] = szTmp;
    }
    this.tabCardMix = Tab;
  }

}
