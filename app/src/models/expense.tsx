import { Category } from '../models/category'

export interface Expense {
  name: string
  category: Category | undefined
  value: number
  date: Date
  ignore: boolean
}