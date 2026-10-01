import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { roomBySlug, sharedRoomFeatures, type Room } from '../../data/site.data';

@Component({
  selector: 'app-room',
  imports: [RouterLink],
  templateUrl: './room.component.html',
})
export class RoomComponent {
  readonly shared = sharedRoomFeatures;
  readonly room: Room;

  constructor() {
    const slug = inject(ActivatedRoute).snapshot.data['roomSlug'] as string;
    const room = roomBySlug(slug);
    if (!room) {
      throw new Error(`Unknown room ${slug}`);
    }
    this.room = room;
  }
}
