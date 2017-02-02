import { Component, OnInit } from '@angular/core';
import {ModalComponent} from "../modal-component";

@Component({
  selector: 'dfa-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.sass']
})
export class DfaAlertComponent implements OnInit, ModalComponent {
  active: boolean;
  constructor() { }

  ngOnInit() {
    this.active = false;
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }

}
