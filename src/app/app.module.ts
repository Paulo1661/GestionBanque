import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClientsComponent } from './clients/clients.component';
import { ComptesComponent } from './comptes/comptes.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NouveuClientComponent } from './clients/nouveu-client/nouveu-client.component';
import { ListClientComponent } from './clients/list-client/list-client.component';
import { ListCompteComponent } from './comptes/list-compte/list-compte.component';
import { MontantDialogComponent } from './montant-dialog/montant-dialog.component';
import { SoldePosterComponent } from './clients/solde-poster/solde-poster.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent,
    ClientsComponent,
    ComptesComponent,
    NouveuClientComponent,
    ListClientComponent,
    ListCompteComponent,
    MontantDialogComponent,
    SoldePosterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
