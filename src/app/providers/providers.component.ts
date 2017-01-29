import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider';
import {DFAService} from '../dfa.service';

@Component({
  selector: 'dfa-providers',
  templateUrl: './providers.component.html',
  providers: [DFAService],
  styleUrls: ['./providers.component.sass']
})
export class ProvidersComponent implements OnInit {
  providers: Provider[] = [];
  constructor(private dfaService: DFAService) {}

  ngOnInit() {
    this.providers = this.dfaService.getProviders();
  }
}
