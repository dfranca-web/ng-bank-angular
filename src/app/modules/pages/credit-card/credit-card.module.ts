import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Router
import { CreditCardRoutingModule } from './credit-card-routing.module'

// Pages Components
import { HomeComponent } from './home/home.component'
import { CardStatementComponent } from './card-statement/card-statement.component'

@NgModule({
  declarations: [HomeComponent, CardStatementComponent],
  imports: [CommonModule, CreditCardRoutingModule]
})
export class CreditCardModule {}
