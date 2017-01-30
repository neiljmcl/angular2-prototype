import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dfa-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.sass']
})
export class AddProviderComponent implements OnInit {
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
