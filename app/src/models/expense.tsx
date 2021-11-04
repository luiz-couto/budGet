export interface Expense {
  name: string
  category: string | undefined
  value: number
  date: Date
  ignore: boolean
}