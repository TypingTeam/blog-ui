import { Routes } from '@angular/router';
import { BlogLayout } from '@shared/components/blog-layout/blog-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: BlogLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/landing/landing.module').then(
            (m) => m.LandingModule,
          ),
      },
    ],
  },
];
