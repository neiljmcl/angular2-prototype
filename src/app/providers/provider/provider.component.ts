import { Component, OnInit, Input } from '@angular/core';

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
