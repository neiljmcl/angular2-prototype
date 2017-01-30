import {Component, OnInit, ViewChild} from '@angular/core';
import { Provider } from '../provider';
import {DFAService} from '../dfa.service';
import {AddProviderComponent} from "./add-provider/add-provider.component";

@Component({
  selector: 'dfa-providers',
  templateUrl: './providers.component.html',
  providers: [DFAService],
  styleUrls: ['./providers.component.sass']
})
export class ProvidersComponent implements OnInit {
  providers: Provider[] = [];
  @ViewChild(AddProviderComponent) addProviderComponent: AddProviderComponent;
  constructor(private dfaService: DFAService) {}

  ngOnInit() {
    this.providers = this.dfaService.getProviders();
  }
  activateAddProviderComponent()  {
    this.addProviderComponent.activate();
  }
}
