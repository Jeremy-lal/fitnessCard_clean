import { ExercisesService } from './../../shared/services/exercises.service';
import { CardService } from './../../shared/services/card.service';
import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/shared/models/exercise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-exercise',
  templateUrl: './choose-exercise.page.html',
  styleUrls: ['./choose-exercise.page.scss'],
})
export class ChooseExercisePage implements OnInit {

  exerciseTrelfe: Exercise;
  exerciseCoeur: Exercise;
  exercisePique: Exercise;
  exerciseCarreau: Exercise;

  exercisesList: Exercise[];


  constructor(private cardService: CardService, private exercisesService: ExercisesService, private router: Router ) { }

  ngOnInit() {
    this.exercisesList = this.exercisesService.exercises;
  }

  sendChooseExercises() {
    this.cardService.createCardPackage(this.exerciseTrelfe, this.exerciseCoeur, this.exerciseCarreau, this.exercisePique);
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }

}
