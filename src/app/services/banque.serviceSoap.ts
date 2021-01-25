import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../models/client.model';
import { Compte } from '../models/compte.model';
import { NgxSoapService, Client as SoapClient, ISoapMethodResponse } from 'ngx-soap';

@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  client1: Client = {
    cin: '1661',
    nom: 'Leufang',
    prenom: 'Paul',
    adresse: 'Route Tunis Km1',
  };

  client2: Client = {
    cin: '2002',
    nom: 'John',
    prenom: 'Doe',
    adresse: 'Zouz Shtrasse',
  }

  compte1: Compte = {
    rib: 1,
    solde: 100,
    isActive: true,
    date: new Date(),
    client: this.client1
  };

  compte2: Compte = {
    rib: 2,
    solde: 150,
    isActive: true,
    date: new Date(),
    client: this.client2
  };

  private clients: Client[] = [
    {...this.client1, comptes: [this.compte1]},
    {...this.client2, comptes: [this.compte2]}
  ];
  private comptes = [
    this.compte1,
    this.compte2
  ];
  soapClient!: SoapClient;
  message: any;

  constructor(private router: Router, private soap: NgxSoapService) {
    this.soap.createClient('assets/gestionBanque.xml').then((soapClient: SoapClient) => this.soapClient = soapClient);
  }

  getClients() {
    return [...this.clients];
  }

  getComptes() {
    return [...this.comptes];
  }

  creerClient(client: Client) {
    this.clients.push(client);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/clients']);
    });
  }

  depotArgent(montant: number, rib: number) {
    const body = {
      arg0: montant,
      arg1: rib
    };
    (<any>this.soapClient).depotArgent(body).subscribe((res: ISoapMethodResponse) => console.log(res));
  }
}
