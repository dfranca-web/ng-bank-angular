import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Modles
import { InvestimentsRoutingModule } from './investiments-routing.module'

// Pages Components
import { HomeComponent } from './home/home.component'
import { InvestimentStatementComponent } from './investiment-statement/investiment-statement.component'

@NgModule({
  declarations: [HomeComponent, InvestimentStatementComponent],
  imports: [CommonModule, InvestimentsRoutingModule]
})
export class InvestimentsModule {}
