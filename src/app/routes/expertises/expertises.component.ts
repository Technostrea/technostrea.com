import {Component, inject} from '@angular/core';
import {ItemCardTeamComponent} from "@app/shared/components/item-card-team/item-card-team.component";
import {AboutTeamService} from "@app/core/services/data/about-team/about-team.service";

@Component({
  selector: 'app-expertises',
  standalone: true,
  imports: [
    ItemCardTeamComponent
  ],
  templateUrl: './expertises.component.html',
  styleUrl: './expertises.component.scss'
})
export class ExpertisesComponent {

  protected aboutTeamService: AboutTeamService = inject(AboutTeamService);

}
