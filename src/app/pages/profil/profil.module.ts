import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { ProfilComponent } from './profil.component';
@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    ThemeModule,
  ],
})
export class ProfilModule { }
