import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <div class="wrap">
        <p class="eyebrow">404</p>
        <h1>That page is not here.</h1>
        <p class="lede">The room or guide you wanted may have moved. Start from the home page or go straight to booking.</p>
        <p class="actions">
          <a class="button" routerLink="/">Home</a>
          <a class="button button-quiet" routerLink="/contact">Request a room</a>
        </p>
      </div>
    </section>
  `,
})
export class NotFoundComponent {}
