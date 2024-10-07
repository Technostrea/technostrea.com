import {Component, inject} from '@angular/core';
import {ItemCardTeamComponent} from "@app/shared/components/item-card-team/item-card-team.component";
import {AboutTeamService} from "@app/core/services/data/about-team/about-team.service";

@Component({
  selector: 'app-teams',
  standalone: true,
    imports: [
        ItemCardTeamComponent
    ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  protected aboutTeamService: AboutTeamService = inject(AboutTeamService);
}
