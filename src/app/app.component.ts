import {Component, OnInit} from '@angular/core';
import {FooterComponent} from './shared/components/footer/footer.component';
import {HeaderComponent} from './shared/components/header/header.component';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import * as AOS from 'aos';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet
  ]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
    const lightbox = GLightbox({});
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

