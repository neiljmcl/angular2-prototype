import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DFAComponent } from './dfa.component';
import { FeedsComponent } from './feeds/feeds.component';
import { HeaderComponent } from './header/header.component';
import { ProvidersComponent } from './providers/providers.component';
import { ProviderComponent } from './providers/provider/provider.component';

@NgModule({
  declarations: [
    DFAComponent,
    FeedsComponent,
    HeaderComponent,
    ProvidersComponent,
    ProviderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DFAComponent]
})
export class AppModule { }
