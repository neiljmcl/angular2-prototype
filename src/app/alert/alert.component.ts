import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dfa-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.sass']
})
export class DfaAlertComponent implements OnInit {
  activated: boolean;
  constructor() { }

  ngOnInit() {
    this.activated = false;
  }

  activate() {
    this.activated = true;
  }

  deactivate() {
    this.activated = false;
  }

}
