import {Component, Input} from '@angular/core';
import {Project} from "@app/core/models/project";

@Component({
  selector: 'app-item-card-project',
  standalone: true,
  imports: [],
  templateUrl: './item-card-project.component.html',
  styleUrl: './item-card-project.component.scss'
})
export class ItemCardProjectComponent {
  @Input({required: true}) project: Project = {} as Project;
}
