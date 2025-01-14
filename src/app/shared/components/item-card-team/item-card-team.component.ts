import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {User} from "@app/core/models/user";

@Component({
  selector: 'app-item-card-team',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './item-card-team.component.html',
  styleUrl: './item-card-team.component.scss'
})
export class ItemCardTeamComponent {
  @Input({required: true}) user: User = {} as User;
}
