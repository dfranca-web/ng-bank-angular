import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Pipes
import { FormatMoneyPipe } from 'src/app/shared/pipes/format-money.pipe'

@NgModule({
  declarations: [FormatMoneyPipe],
  exports: [FormatMoneyPipe],
  imports: [CommonModule]
})
export class PipesModule {}
