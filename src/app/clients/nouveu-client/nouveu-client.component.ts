import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Client } from '../../models/client.model';
import { BanqueService } from '../../services/banque.service';
import { UiService } from '../../shared/ui.service';

@Component({
  selector: 'app-nouveu-client',
  templateUrl: './nouveu-client.component.html',
  styleUrls: ['./nouveu-client.component.css']
})
export class NouveuClientComponent implements OnInit, OnDestroy {

  private clientSubscription = new Subscription();

  constructor(private banqueService: BanqueService, private uiService: UiService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    var client: Client = {
      cin: form.value.cni,
      nom: form.value.nom,
      prenom: form.value.prenom,
      adresse: form.value.adresse
    };
    this.clientSubscription=this.banqueService.creerClient(client).subscribe(
      cni => {
        this.uiService.showSnackBar(
          `client ${cni} créé`,
          null,
          {duration: 4000,verticalPosition:'bottom'}
        );
      },
      error => {
        this.uiService.showSnackBar(
          'Echec de la création du client',
          null,
          {duration: 4000,verticalPosition:'bottom'}
        );
        console.log(error.message);
      }
    );
  }

  ngOnDestroy(): void {
    this.clientSubscription.unsubscribe();
  }

}
