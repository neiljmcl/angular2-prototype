import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {DfaAlertComponent} from "../../alert/alert.component";
import {ModalComponent} from "../../modal-component";

@Component({
  selector: 'dfa-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.sass']
})
export class AddProviderComponent implements OnInit, ModalComponent {
  active: boolean;
  @ViewChild(DfaAlertComponent) dfaAlert: DfaAlertComponent;
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
  addProvider() {
    this.dfaAlert.activate();
  }

}
