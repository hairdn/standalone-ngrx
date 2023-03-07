import { Route } from '@angular/router';
import {
  provideFeatureEffects,
  provideStoreFeature,
} from '../standalone-ngrx';
import { musiciansFeature } from '@musicians_clone/state';
import { MusicianListComponent } from './containers/musician-list.component';
import { MusicianDetailsComponent } from './containers/musician-details.component';
import { MusiciansApiEffects } from './effects/musicians-api.effects';
import { MusicianExistsGuard } from './musician-exists.guard';

export const musiciansRoutes: Route[] = [
  {
    path: '',
    children: [
      { path: '', component: MusicianListComponent, title: 'Musicians Clone' },
      {
        path: ':id',
        component: MusicianDetailsComponent,
        title: 'Musician Clone Details',
        canActivate: [MusicianExistsGuard],
      },
    ],
    providers: [
      provideStoreFeature(musiciansFeature),
      provideFeatureEffects([MusiciansApiEffects]),
    ],
  },
];
