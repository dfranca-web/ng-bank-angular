export interface CurrentAccount {
  id: number
  agency: number
  value: number
}

export interface CurrentAccountTransaction {
  id: number
  externalId: number
  value: number
  type: string
  dateAt: Date
}
