import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { ProjetTableComponent } from './projet-table/projet-table.component';
import { CompteComponent } from './compte/compte.component';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    UserTableComponent,
    ProjetTableComponent,
    CompteComponent,
  ],
})
export class TablesModule { }
