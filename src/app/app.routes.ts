import { Routes } from '@angular/router';
import { pageSeo, roomPages } from './data/site.data';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GuideComponent } from './pages/guide/guide.component';
import { HomeComponent } from './pages/home/home.component';
import { IslandComponent } from './pages/island/island.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RoomComponent } from './pages/room/room.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { seo: pageSeo.home } },
  { path: 'rooms', component: RoomsComponent, data: { seo: pageSeo.rooms } },
  ...roomPages.map(({ room, seo }) => ({
    path: `rooms/${room.slug}`,
    component: RoomComponent,
    data: { seo, roomSlug: room.slug },
  })),
  { path: 'island', component: IslandComponent, data: { seo: pageSeo.island } },
  { path: 'gallery', component: GalleryComponent, data: { seo: pageSeo.gallery } },
  { path: 'guide', component: GuideComponent, data: { seo: pageSeo.guide } },
  { path: 'contact', component: ContactComponent, data: { seo: pageSeo.contact } },
  { path: '**', component: NotFoundComponent, data: { seo: pageSeo.notFound } },
];
