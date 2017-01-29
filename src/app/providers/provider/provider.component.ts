import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {AddProviderComponent} from "../add-provider/add-provider.component";

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.sass']
})
export class ProviderComponent implements OnInit {
  @Input() provider;
  constructor() { }

  ngOnInit() {

  }

}
