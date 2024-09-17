import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil',
    loadChildren: () => import('@app/routes/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    title: 'A propos',
    loadChildren: () => import('@app/routes/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'expertises',
    title: 'Expertises',
    loadChildren: () => import('@app/routes/expertises/expertises.module').then(m => m.ExpertisesModule)
  },
  {
    path: 'projects',
    title: 'Projets',
    loadChildren: () => import('@app/routes/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'contact',
    title: 'Contact',
    loadChildren: () => import('@app/routes/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'not-found',
    title: 'Page non trouvee',
    loadChildren: () => import('@app/routes/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found'}
];
