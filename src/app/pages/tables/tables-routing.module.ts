import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { UserTableComponent } from './user-table/user-table.component';
import { ProjetTableComponent } from './projet-table/projet-table.component';
import { CompteComponent } from './compte/compte.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
  {
    path: 'user-table',
    component: UserTableComponent,
  },
  {
    path: 'projet-table',
    component:ProjetTableComponent,} ,
    {
      path: 'compte-table',
      component:CompteComponent,} ,
  

  
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  UserTableComponent,
  ProjetTableComponent,
  CompteComponent, 
];
