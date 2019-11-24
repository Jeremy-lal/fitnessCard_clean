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

  multiplicatorTime: number;
  multiplicatorRep: number;


  constructor(private cardService: CardService, public exercisesService: ExercisesService, private router: Router,
              public settingService: SettingService) { }

  ngOnInit() {
    this.exercisesListFran = this.exercisesService.exercisesFran;
    this.exercisesListEng = this.exercisesService.exercisesEng;
    this.multiplicatorTime = this.cardService.multiplicatorTime;
    this.multiplicatorRep = this.cardService.multiplicatorRep;
  }

  sendChooseExercises() {
    this.cardService.createCardPackage(this.exerciseTrelfe, this.exerciseCoeur, this.exerciseCarreau, this.exercisePique,
                                       this.multiplicatorTime, this.multiplicatorRep);
  }

  backToHome() {
    this.router.navigateByUrl('choose-level');
  }

}
