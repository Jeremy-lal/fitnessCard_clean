import { ExercisesService } from 'src/app/shared/services/exercises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.page.html',
  styleUrls: ['./congratulation.page.scss'],
})
export class CongratulationPage implements OnInit {

  hours: number;
  mins: number;
  seconds: number;

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.seconds = this.exercisesService.seconds;
    this.mins = this.exercisesService.mins;
    this.hours = this.exercisesService.hours;
  }

}
