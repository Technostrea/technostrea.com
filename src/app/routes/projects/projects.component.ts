import {Component, inject} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from "@angular/router";
import {ProjectService} from "@app/core/services/data/projects/project.service";
import {ItemCardProjectComponent} from "@app/shared/components/item-card-project/item-card-project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage, ItemCardProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  protected projectService = inject(ProjectService);
}
