import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// Pages Components
import { HomeComponent } from './home/home.component'
import { InvestimentStatementComponent } from './investiment-statement/investiment-statement.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'extrato',
    component: InvestimentStatementComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestimentsRoutingModule {}
