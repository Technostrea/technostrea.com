import {Injectable} from '@angular/core';
import * as project from '@assets/data/projects.json';
import {Project} from "@app/core/models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  get projects(): Project[] {
    return project.data as Project[];
  }
}
