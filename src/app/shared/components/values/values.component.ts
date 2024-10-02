import {Component, inject} from '@angular/core';
import {ItemCardValueComponent} from "@app/shared/components/item-card-value/item-card-value.component";
import {ValueService} from "@app/core/services/data/values/value.service";

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [
    ItemCardValueComponent
  ],
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss'
})
export class ValuesComponent {
  protected valueService = inject(ValueService);
}
