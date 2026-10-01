import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { rooms, sharedRoomFeatures } from '../../data/site.data';

@Component({
  selector: 'app-rooms',
  imports: [RouterLink],
  templateUrl: './rooms.component.html',
})
export class RoomsComponent {
  readonly rooms = rooms;
  readonly shared = sharedRoomFeatures;
}
