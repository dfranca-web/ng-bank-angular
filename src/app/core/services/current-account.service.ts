import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs'

// Environment
import { environment } from '../../configs/environment/environment'

// Models
import {
  CurrentAccount,
  CurrentAccountTransaction
} from 'src/app/shared/models/current-account.model'
import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CurrentAccountService {
  public apiURL = `${environment.apiURL}/currentAccount`

  private account: CurrentAccount = {} as CurrentAccount
  private transactions: CurrentAccountTransaction[] = [] as CurrentAccountTransaction[]

  static emitAccountValue: EventEmitter<number> = new EventEmitter<number>()

  constructor(private http: HttpClient) {}

  get currentAccount(): Observable<CurrentAccount> {
    return this.http.get<CurrentAccount>(this.apiURL).pipe(
      tap(response => response),
      tap(response => (this.account = response))
    )
  }

  get currentAccountValue(): number {
    return this.account.value
  }

  get CurrentAccountTransaction(): CurrentAccountTransaction[] {
    return this.transactions
  }

  public withdraw(value: number): void {
    this.account.value -= value
    this.emitAccountValue()
  }

  public deposit(value: number): void {
    this.account.value += value
    this.emitAccountValue()
  }

  public registerTransaction(transaction: CurrentAccountTransaction): void {
    this.transactions.push(transaction)
  }

  public emitAccountValue(): void {
    CurrentAccountService.emitAccountValue.emit(this.account.value)
  }
}
