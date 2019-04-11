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
import { ModalComponent } from './modal/modal.component';
import { ModallComponent } from './modal/modall/modall.component';

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
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    GestionutulisateurComponent,
    ConfprofilComponent,
    CalendarComponent,
    DetailPtrojetComponent,
    AjoutProjetComponent,
    ModalComponent,
    ModallComponent,
    
   
  ],
})
export class PagesModule {
}
