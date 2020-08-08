import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PantryComponent } from './pantry/pantry.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ExploreComponent } from './explore/explore.component'

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'pantry', component: PantryComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'explore', component: ExploreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
