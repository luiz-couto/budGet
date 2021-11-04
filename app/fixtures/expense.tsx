import { Expense } from '../src/models/expense'
import CategoryEx from './category'

const ExpenseExample: Expense = {
  name: "Expense Name",
  category: CategoryEx,
  value: 32.64,
  date: new Date("03/11/2021"),
  ignore: false
}

export default ExpenseExample