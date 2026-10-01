import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { rooms, site } from '../../data/site.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly site = site;
  readonly rooms = rooms.slice(0, 4);
}
