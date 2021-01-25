import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { Compte } from '../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  readonly host = 'http://localhost:8080/GestionBancaireWebClient/rest/banque';

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.host}/clients`);
  }

  getComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.host}/comptes`);
  }

  creerClient(client: Client): Observable<string> {
    return this.http.post<string>(`${this.host}/client`, client);
  }

  depotArgent(montant: number, rib: number): Observable<void> {
    return this.http.get<void>(`${this.host}/depot/${rib}/${montant}`);
  }

  retraitArgent(montant: number, rib: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.host}/retrait/${rib}/${montant}`);
  }

  ouvertureCompte(cin: string, montant: number): Observable<number> {
    return this.http.get<number>(`${this.host}/ouverture/${cin}/${montant}`);
  }

  clotureCompte(rib: number): Observable<void> {
    return this.http.get<void>(`${this.host}/cloture/${rib}`);
  }

  getSolde(rib: number): Observable<number> {
    return this.http.get<number>(`${this.host}/solde/${rib}`);
  }

}
