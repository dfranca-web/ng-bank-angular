import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Modules
import { PipesModule } from 'src/app/shared/pipes/pipes.module'
import { CurrentAccountRoutingModule } from './current-account-routing.module'

// Pages Components
import { HomeComponent } from './home/home.component'
import { PaymentsComponent } from './payments/payments.component'
import { AccountStatementComponent } from './account-statement/account-statement.component'

@NgModule({
  declarations: [HomeComponent, PaymentsComponent, AccountStatementComponent],
  imports: [CommonModule, CurrentAccountRoutingModule, PipesModule, FormsModule]
})
export class CurrentAccountModule {}
