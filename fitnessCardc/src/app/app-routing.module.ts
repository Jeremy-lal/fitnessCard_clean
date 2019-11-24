import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'choose-exercise', loadChildren: './pages/choose-exercise/choose-exercise.module#ChooseExercisePageModule' },
  { path: 'congratulation', loadChildren: './pages/congratulation/congratulation.module#CongratulationPageModule' },
  { path: 'slide-card', loadChildren: './pages/slide-card/slide-card.module#SlideCardPageModule' },
  { path: 'explication', loadChildren: './pages/explication/explication.module#ExplicationPageModule' },
  { path: 'exercises-link', loadChildren: './pages/exercises-link/exercises-link.module#ExercisesLinkPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'choose-level', loadChildren: './pages/choose-level/choose-level.module#ChooseLevelPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
