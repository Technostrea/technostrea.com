import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {ItemCardTeamComponent} from "@app/shared/components/item-card-team/item-card-team.component";
import {ValuesComponent} from "@app/shared/components/values/values.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    ItemCardTeamComponent,
    ValuesComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
