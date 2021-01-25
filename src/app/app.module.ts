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
import { NgxSoapModule } from 'ngx-soap';
import { NouveuClientComponent } from './clients/nouveu-client/nouveu-client.component';
import { ListClientComponent } from './clients/list-client/list-client.component';
import { ListCompteComponent } from './comptes/list-compte/list-compte.component';
import { MontantDialogComponent } from './montant-dialog/montant-dialog.component';

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
    MontantDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxSoapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
