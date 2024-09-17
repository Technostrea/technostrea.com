import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {DataService} from "@app/core/services/data/data.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  dataHomePage: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.dataHomePage = data;
    });
  }
}
