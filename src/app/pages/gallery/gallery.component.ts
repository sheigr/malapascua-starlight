import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gallery } from '../../data/site.data';

@Component({
  selector: 'app-gallery',
  imports: [RouterLink],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  readonly photos = gallery;
}
