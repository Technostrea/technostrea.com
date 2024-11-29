import {Component, Input} from '@angular/core';
import {Value} from "@app/core/models/value";

@Component({
  selector: 'app-item-card-value',
  standalone: true,
  imports: [],
  templateUrl: './item-card-value.component.html',
  styleUrl: './item-card-value.component.scss'
})
export class ItemCardValueComponent {
  @Input({required: true}) value: Value = {} as Value;
}
