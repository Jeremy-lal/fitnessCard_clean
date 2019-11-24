import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';


@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  seconds = 0;
  mins = 0;
  hours = 0;
  timex;

  exercisesFran: Exercise[] = [
    {
      title: 'Pompe',
      type: 'repetition',
      link: ''
    },
    {
      title: 'Traction',
      type: 'repetition',
      link: ''
    },
    {
      title: 'Chaise',
      type: 'time',
      link: 'https://www.youtube.com/watch?v=65kc2AXgjeU'
    },
    {
      title: 'Gainage',
      type: 'time',
      link: ''
    },
  ];

  exercisesEng: Exercise[] = [
    {
      title: 'Press-ups',
      type: 'repetition',
      link: ''
    },
    {
      title: 'Pull up',
      type: 'repetition',
      link: ''
    },
    {
      title: 'Wall sit',
      type: 'time',
      link: ''
    },
    {
      title: 'Plank',
      type: 'time',
      link: ''
    },
  ];

  exercisesAlphaF: Exercise[] = this.exercisesFran.sort(this.sortTab);
  exercisesAlphaE: Exercise[] = this.exercisesEng.sort(this.sortTab);

  constructor() { }

  startTimer() {
    this.timex = setInterval(() => {
      this.seconds++;
      if (this.seconds > 60) {
        while (this.seconds >= 60) {
          this.seconds -= 60;
          this.mins++;
        }
      }
      if (this.mins > 60) {
        while (this.mins >= 60) {
          this.mins -= 60;
          this.hours++
            ;
        }
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timex);
  }

  sortTab(a, b) {
    return (a.title > b.title) ? 1 : -1;
  }


}
