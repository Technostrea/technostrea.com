import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from "@app/routes/projects/projects.component";

const routes: Routes = [
  {path: '', component: ProjectsComponent, title: 'Projets'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
