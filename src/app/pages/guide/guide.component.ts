import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faqs } from '../../data/site.data';

@Component({
  selector: 'app-guide',
  imports: [RouterLink],
  templateUrl: './guide.component.html',
})
export class GuideComponent {
  readonly faqs = faqs;
}
