import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { GestionutulisateurComponent } from './gestionutulisateur/gestionutulisateur.component';
import { ProfilModule } from './profil/profil.module';
import { ConfprofilComponent } from './confprofil/confprofil.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DetailPtrojetComponent } from './detail-ptrojet/detail-ptrojet.component';
import { AjoutProjetComponent } from './ajout-projet/ajout-projet.component';
import { DetailPtrojetModule } from './detail-ptrojet/detail-ptrojet.module';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { MessagerieModulModule } from './messagerie/messagerie-modul.module';
import { ChartsComponent } from './charts/charts.component';
import { NgGanttEditorModule } from 'ng-gantt' 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ProfilModule,
    MiscellaneousModule,
    DetailPtrojetModule,
    MessagerieModulModule,
    NgGanttEditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    GestionutulisateurComponent,
    ConfprofilComponent,
    CalendarComponent,
   // DetailPtrojetComponent,
    AjoutProjetComponent,
   ChartsComponent,
   //MessagerieComponent,

   
  ],
})
export class PagesModule {
}
