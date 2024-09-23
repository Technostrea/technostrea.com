import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {AboutTeamService} from "@app/routes/about/services/about-team/about-team.service";
import {ItemCardTeamComponent} from "@app/shared/components/item-card-team/item-card-team.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    ItemCardTeamComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutTeamService: AboutTeamService = inject(AboutTeamService);
}
