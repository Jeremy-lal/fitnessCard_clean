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
    },
    {
      title: 'Traction',
      type: 'repetition',
    },
    {
      title: 'Chaise',
      type: 'time',
    },
    {
      title: 'Gainage',
      type: 'time',
    }
  ];

  exercisesEng: Exercise[] = [
    {
      title: 'Press-ups',
      type: 'repetition',
    },
    {
      title: 'Pull up',
      type: 'repetition',
    },
    {
      title: 'Wall sit',
      type: 'time',
    },
    {
      title: 'Plank',
      type: 'time',
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
