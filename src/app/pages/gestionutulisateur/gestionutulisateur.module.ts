import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GestionutulisateurComponent } from './gestionutulisateur.component';


@NgModule({
  
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    GestionutulisateurComponent,
  ],
})
export class GestionutulisateurModule { }
