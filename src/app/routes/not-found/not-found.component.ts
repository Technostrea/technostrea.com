import { Component } from '@angular/core';
import {AdnAnimationComponent} from "@app/shared/components/adn-animation/adn-animation.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    AdnAnimationComponent,
    RouterLink
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
