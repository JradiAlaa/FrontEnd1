import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagerieComponent } from './messagerie.component';
import { NbChatModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { MessagerieServiceService } from './messagerie-service.service';

@NgModule({
  imports: [
    NbChatModule,
    CommonModule,
    ThemeModule,
],
  declarations: [
    MessagerieComponent
  ],
  providers: [
    MessagerieServiceService,
  ],
  
})
export class MessagerieModulModule { }
