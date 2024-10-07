import { Component } from '@angular/core';
import {LeafletMapComponent} from "@app/shared/components/leaflet-map/leaflet-map.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    LeafletMapComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
