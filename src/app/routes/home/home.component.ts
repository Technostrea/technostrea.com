import {Component, inject, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {AboutTeamService} from "@app/core/services/data/about-team/about-team.service";
import {RouterLink} from "@angular/router";
import {ItemCardTeamComponent} from "@app/shared/components/item-card-team/item-card-team.component";
import {AboutComponent} from "@app/routes/about/about.component";
import {ExpertisesComponent} from "@app/routes/expertises/expertises.component";
import {ProjectsComponent} from "@app/routes/projects/projects.component";
import {ContactComponent} from "@app/routes/contact/contact.component";
import {AdnAnimationComponent} from "@app/shared/components/adn-animation/adn-animation.component";
import {LottieComponent} from "ngx-lottie";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgOptimizedImage,
    ItemCardTeamComponent,
    NgForOf,
    NgIf,
    AboutComponent,
    ExpertisesComponent,
    ProjectsComponent,
    ContactComponent,
    AdnAnimationComponent,
    LottieComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  aboutTeamService: AboutTeamService = inject(AboutTeamService);
  services = [
    {
      icon: 'bi bi-code-slash',
      title: 'Développement Web et Applications',
      description: 'Création de sites web et d\'applications mobiles sur mesure pour booster votre présence en ligne.',
      delay: '100'
    },
    {
      icon: 'bi bi-server',
      title: 'Gestion de l\'Infrastructure IT',
      description: 'Optimisation et maintenance de vos systèmes informatiques pour une performance maximale.',
      delay: '200'
    },
    {
      icon: 'bi bi-lightbulb',
      title: 'Conseil Stratégique en Technologie',
      description: 'Accompagnement dans la définition et la mise en œuvre de votre stratégie technologique.',
      delay: '300'
    },
    {
      icon: 'bi bi-cloud-lock',
      title: 'Solutions Cloud et Sécurité',
      description: 'Mise en place de solutions cloud sécurisées pour protéger et accéder à vos données à tout moment.',
      delay: '400'
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

  trackByUserName(index: number, user: any): string {
    return user.name;
  }
}
