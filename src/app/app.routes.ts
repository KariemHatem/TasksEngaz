import { Routes } from '@angular/router';
import { Timeline } from './features/engaz-timeline/timeline/timeline';
import { Tabel } from './shared/components/tabel/tabel/tabel';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/timeline',
    pathMatch: 'full',
  },
  {
    path: 'timeline',
    component: Timeline,
    title: 'Engaz Timeline',
  },
  {
    path: 'tabel',
    component: Tabel,
    title: 'Region Tabel ',
  },
];
