import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'formatMoney',
  pure: false
})
export class FormatMoneyPipe implements PipeTransform {
  transform(value: number): string {
    const formatCurrency = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })

    if (!value) {
      return 'R$ 0,00'
    }

    return formatCurrency.format(value)
  }
}
