import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../core/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'conta-corrente',
    loadChildren: () =>
      import('./pages/current-account/current-account.module').then(m => m.CurrentAccountModule)
  },
  {
    path: 'investimento',
    loadChildren: () =>
      import('./pages/investiments/investiments.module').then(m => m.InvestimentsModule)
  },
  {
    path: 'cartao-de-credito',
    loadChildren: () =>
      import('./pages/credit-card/credit-card.module').then(m => m.CreditCardModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule {}
