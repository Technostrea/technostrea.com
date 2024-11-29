import {Component, inject} from '@angular/core';
import {ExpertisesService} from "@app/core/services/data/expertises/expertises.service";
import {ItemCardServiceComponent} from "@app/shared/components/item-card-service/item-card-service.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    ItemCardServiceComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  protected expertiseService = inject(ExpertisesService);
}
