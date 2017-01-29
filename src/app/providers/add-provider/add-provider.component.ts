import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dfa-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.sass']
})
export class AddProviderComponent implements OnInit {
  @Input() enabled: boolean;
  constructor() { }

  ngOnInit() {
    this.enabled = false;
  }

}
