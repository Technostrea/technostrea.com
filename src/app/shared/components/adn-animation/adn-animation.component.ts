import { Component } from '@angular/core';
import {AnimationItem} from "lottie-web";
import {AnimationOptions, LottieComponent} from "ngx-lottie";

@Component({
  selector: 'app-adn-animation',
  standalone: true,
  imports: [
    LottieComponent
  ],
  templateUrl: './adn-animation.component.html',
  styleUrl: './adn-animation.component.scss'
})
export class AdnAnimationComponent {

  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: 'assets/animations/web.json',
    loop: true,
    autoplay: true
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
