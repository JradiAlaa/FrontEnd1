import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailPtrojetComponent} from './detail-ptrojet.component';
import { NbDialogModule, NbWindowModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { WindowComponent } from './window/window.component';

@NgModule({
  
  imports: [
    CommonModule,
    ThemeModule,
    NbDialogModule.forChild(),
    NbWindowModule.forRoot(),
  ],
  declarations: [
    
    DetailPtrojetComponent,
    WindowComponent ]
})
export class DetailPtrojetModule { }
