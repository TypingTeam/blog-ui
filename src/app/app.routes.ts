import { Routes } from '@angular/router';
import { BlogLayout } from '@shared/components/blog-layout/blog-layout.component';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/blog',
    component: BlogLayout,
    children: [
      {
        path: 'blog',
        loadChildren: () =>
          import('./features/landing/landing.module').then(
            (m) => m.LandingModule,
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./features/landing/landing.module').then(
            (m) => m.LandingModule,
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./features/landing/landing.module').then(
            (m) => m.LandingModule,
          ),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
