import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NbDialogModule, NbWindowModule } from '@nebular/theme';

@NgModule({
  imports: [
    ThemeModule,
    NbDialogModule.forChild(),
    NbWindowModule.forRoot(),


  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
