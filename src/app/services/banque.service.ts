import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { Compte } from '../models/compte.model';

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
    client: this.client1
  };

  compte2: Compte = {
    rib: 2,
    solde: 150,
    isActive: true,
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

  constructor() { }

  getClients() {
    return [...this.clients];
  }

  getComptes() {
    return [...this.comptes];
  }
}
