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
import { ModalComponent } from './modal/modal.component';

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
      component: ModalComponent,
     
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
      path: 'detailProjet/:id',
      component: DetailPtrojetComponent,
     
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
