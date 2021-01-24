import { Client } from "./client.model";

export interface Compte {
  client?: Client;
  date?: Date;
  rib: number;
  solde: number;
  isActive: boolean;
}
