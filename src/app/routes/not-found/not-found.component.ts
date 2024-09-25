import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AdnAnimationComponent} from "@app/shared/components/adn-animation/adn-animation.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterLink,
    AdnAnimationComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
