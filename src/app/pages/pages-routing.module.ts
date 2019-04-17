import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionutulisateurComponent } from './gestionutulisateur/gestionutulisateur.component';
import { ProfilComponent } from './profil/profil.component';
import { ConfprofilComponent } from './confprofil/confprofil.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DetailPtrojetComponent } from './detail-ptrojet/detail-ptrojet.component';
import { AjoutProjetComponent } from './ajout-projet/ajout-projet.component';
import { WindowComponent } from './detail-ptrojet/window/window.component';
import { MessagerieComponent } from './messagerie/messagerie.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
     
    },
    {
      path: 'modal',
      component: DashboardComponent,
     
    },
    
    {
      path: 'ajoutProjet',
      component: AjoutProjetComponent,
     
    },
    {
      path: 'calendar',
      component: CalendarComponent,
     
    },
    {
      path: 'messagerie',
      component: MessagerieComponent,
     
    },
    {
      path: 'detailProjet/:id',
      component: DetailPtrojetComponent,
     
    },
    {
      path: 'messageinfo/:id',
      component: WindowComponent,
     
    },
    {
      path: 'login1',
      component: DashboardComponent,
    },
    {
      path: 'Gestionutulisateur',
      component: GestionutulisateurComponent,
    },
    {
      path: 'tables',
      loadChildren: './tables/tables.module#TablesModule',

    },
    {
      path: 'profil',
      component: ProfilComponent,
    },
    {
      path: 'Confprofil',
      component: ConfprofilComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
