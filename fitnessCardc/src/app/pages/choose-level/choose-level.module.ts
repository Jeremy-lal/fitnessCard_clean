import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChooseLevelPage } from './choose-level.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseLevelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChooseLevelPage]
})
export class ChooseLevelPageModule {}
