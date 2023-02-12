import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// Pages Components
import { HomeComponent } from './home/home.component'
import { CardStatementComponent } from './card-statement/card-statement.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'extrato',
    component: CardStatementComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule {}
