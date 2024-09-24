import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  activeFragment: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Écoute les événements de navigation pour détecter les changements de fragments
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = this.router.url.split('#')[1];
      console.log('Fragment:', fragment);
      this.activeFragment = fragment ? fragment : 'home'; // Par défaut 'home' si aucun fragment
    });
  }

  isActive(fragment: string): boolean {
    return this.activeFragment === fragment;
  }
}
