import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SeoConfig, site } from './data/site.data';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  readonly site = site;
  readonly menuOpen = signal(false);
  readonly year = new Date().getFullYear();

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.menuOpen.set(false);
      this.applySeo();
    });
    this.applySeo();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  private applySeo(): void {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const config = route.data['seo'] as SeoConfig | undefined;
    if (config) {
      this.seo.apply(config);
    }
  }
}
