import { Component, OnInit } from '@angular/core'

// Services
import { CurrentAccountService } from './../../../../core/services/current-account.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public accountValue = 0
  public inputWithdraw = 0
  public inputDeposit = 0

  constructor(private currentAccountService: CurrentAccountService) {}

  ngOnInit(): void {
    this.currentAccountService.currentAccount.subscribe(() => this.loadAccountValue())
    CurrentAccountService.emitAccountValue.subscribe(value => (this.accountValue = value))
  }

  get currentAccountValue(): number {
    return this.currentAccountService.currentAccountValue
  }

  public loadAccountValue(): void {
    this.accountValue = this.currentAccountValue
  }

  public withdraw(): void {
    this.currentAccountService.withdraw(Number(this.inputWithdraw))
    this.inputWithdraw = 0
  }

  public deposit(): void {
    this.currentAccountService.deposit(Number(this.inputDeposit))
    this.inputDeposit = 0
  }
}
