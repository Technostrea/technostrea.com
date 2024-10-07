import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.scss'
})
export class LeafletMapComponent implements OnInit {
  protected map: any;

  ngOnInit() {
    this.configureMap();
  }

  configureMap() {
    this.map = L.map('map').setView([-4.7820437,11.8637369], 13);

    L.marker([-4.7809914299505865, 11.861463139800557]).addTo(this.map)
      .bindPopup('Technostréa');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

}
