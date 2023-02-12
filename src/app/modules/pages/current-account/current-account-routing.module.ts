import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// Pages Components
import { HomeComponent } from './home/home.component'
import { PaymentsComponent } from './payments/payments.component'
import { AccountStatementComponent } from './account-statement/account-statement.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'extrato',
    component: AccountStatementComponent
  },
  {
    path: 'pagamentos',
    component: PaymentsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentAccountRoutingModule {}
