import { Compte } from "./compte.model";

export interface Client {
  cin: string;
  nom: string;
  prenom: string;
  adresse: string;
  comptes?: Compte[];
}
