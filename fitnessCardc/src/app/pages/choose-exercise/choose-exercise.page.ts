import { SettingService } from './../../shared/services/setting.service';
import { Router } from '@angular/router';
import { ExercisesService } from './../../shared/services/exercises.service';
import { CardService } from './../../shared/services/card.service';
import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/shared/models/exercise';

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

  exercisesListFran: Exercise[];
  exercisesListEng: Exercise[];


  constructor(private cardService: CardService, private exercisesService: ExercisesService, private router: Router,
              public settingService: SettingService) { }

  ngOnInit() {
    this.exercisesListFran = this.exercisesService.exercisesFran;
    this.exercisesListEng = this.exercisesService.exercisesEng;
  }

  sendChooseExercises() {
    this.cardService.createCardPackage(this.exerciseTrelfe, this.exerciseCoeur, this.exerciseCarreau, this.exercisePique);
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }

}
