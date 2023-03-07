import { Route } from '@angular/router';
import { HomeComponent } from '@home/home.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent, title: 'Home' },
  {
    path: 'musicians',
    loadChildren: () =>
      import('@musicians/musicians.routes').then((m) => m.musiciansRoutes),
  },
  {
    path: 'musicians_clone',
    loadChildren: () =>
      import('@musicians_clone/musicians.routes').then((m) => m.musiciansRoutes),
  },
];
