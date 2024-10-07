import {Component} from '@angular/core';
import {ItemCardTeamComponent} from "@app/shared/components/item-card-team/item-card-team.component";
import {TeamsComponent} from "@app/shared/components/teams/teams.component";
import {ServicesComponent} from "@app/shared/components/services/services.component";

@Component({
  selector: 'app-expertises',
  standalone: true,
  imports: [
    ItemCardTeamComponent,
    TeamsComponent,
    ServicesComponent
  ],
  templateUrl: './expertises.component.html',
  styleUrl: './expertises.component.scss'
})
export class ExpertisesComponent {
}
