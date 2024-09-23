import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {AboutTeamService} from "@app/routes/about/services/about-team/about-team.service";
import {ItemCardTeamComponent} from "@app/shared/components/item-card-team/item-card-team.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    ItemCardTeamComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutTeamService: AboutTeamService = inject(AboutTeamService);

  trackByUserName(index: number, user: any): string {
    return user.name;
  }

}
