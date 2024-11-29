import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpertisesComponent} from "@app/routes/expertises/expertises.component";

const routes: Routes = [
  {path: '', component: ExpertisesComponent, title: 'Expertises'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertisesRoutingModule {
}
