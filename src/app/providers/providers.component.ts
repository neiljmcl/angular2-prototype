import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider';
import {DFService} from '../df15.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  providers: [DFService],
  styleUrls: ['./providers.component.sass']
})
export class ProvidersComponent implements OnInit {
  providers: Provider[] = [];
  constructor(private dfService: DFService) {}

  ngOnInit() {
    this.providers = this.dfService.getProviders();
  }
}
