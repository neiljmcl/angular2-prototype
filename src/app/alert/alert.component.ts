import { Component, OnInit } from '@angular/core';
import {Modal} from "../modal";

@Component({
  selector: 'dfa-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.sass']
})
export class DfaAlertComponent implements OnInit, Modal {
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
