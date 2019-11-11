import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';


@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  hours = 0;
  mins = 0;
  seconds = 0;
  timex;

  exercises: Exercise[] = [
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
      link: ''
    },
    {
      title: 'Gainage',
      type: 'time',
      link: ''
    },
  ];

  exercisesAlpha: Exercise[] = this.exercises.sort(this.sortTab);

  constructor() { }

  startTimer() {

    this.timex = setTimeout(() => {
      this.seconds++;
      if (this.seconds > 59) {
        this.seconds = 0;
        this.mins++;
      }
      if (this.mins > 59) {
        this.mins = 0;
        this.hours++;
      }

      this.startTimer();
    }, 1000);
  }

  stopTimer() {
    clearTimeout(this.timex);
  }

  sortTab(a, b) {
    return (a.title > b.title) ? 1 : -1;
  }


}
