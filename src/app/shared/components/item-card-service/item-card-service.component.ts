import {Component, Input} from '@angular/core';
import {Expertise} from "@app/core/models/expertise";

@Component({
  selector: 'app-item-card-service',
  standalone: true,
  imports: [],
  templateUrl: './item-card-service.component.html',
  styleUrl: './item-card-service.component.scss'
})
export class ItemCardServiceComponent {
  @Input({required: true}) expertise: Expertise = {} as Expertise
}
