import { Exercise } from './../models/exercise';
import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  tabCard: Card[] = [];

  constructor() { }

  createCardPackage(trefle, coeur , carreau, pique): Card[] {

    for (let i = 1; i <= 4; i++) {
      if (i === 1) {
        var color = 'trefle';
        var exercise = trefle;
      } else if (i === 2) {
        var color = 'coeur';
        var exercise = coeur;
      } else if (i === 3) {
        var color = 'carreau';
        var exercise = carreau;
      } else {
        var color = 'pique';
        var exercise = pique;
      }

      for (let j = 1; j <= 13; j++) {
        var newCard: Card = new Card();
        newCard.color = color;
        newCard.exercise = exercise;
        if (j <=10) {
          newCard.repetition = j;
          newCard.time = j * 6;
        }else {
          newCard.repetition = 10;
          newCard.time = 10 * 6;
        }
        
        newCard.img = `../../assets/${color}/${j}-${color}.png`;

        this.tabCard.push(newCard);
      }
    }
    return this.tabCard;
  }
}
