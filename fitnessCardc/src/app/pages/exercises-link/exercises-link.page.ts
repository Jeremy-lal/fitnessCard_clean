import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/shared/models/exercise';
import { ExercisesService } from 'src/app/shared/services/exercises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises-link',
  templateUrl: './exercises-link.page.html',
  styleUrls: ['./exercises-link.page.scss'],
})
export class ExercisesLinkPage implements OnInit {

  exercisesTab: Exercise[];

  constructor(private exercisesService: ExercisesService, private router: Router) { }

  ngOnInit() {
    this.exercisesTab = this.exercisesService.exercisesFran;
  }

  backToHome() {
    this.router.navigateByUrl('/settings');
  }
}
