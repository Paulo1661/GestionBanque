import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ComptesComponent } from './comptes/comptes.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'comptes', component: ComptesComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
