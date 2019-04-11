import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NbDialogRef } from '@nebular/theme';
@Component({
  selector: 'modall',
  templateUrl: './modall.component.html',
  styleUrls: ['./modall.component.scss']
})
export class ModallComponent {

  @Input() title: string;

  constructor(protected ref: NbDialogRef<ModallComponent>) {}

  dismiss() {
    this.ref.close();
  }
}
