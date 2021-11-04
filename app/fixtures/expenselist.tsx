import { Expense } from '../src/models/expense'
import CategoryEx from './category'

const ExpenseListExample: Expense[] = [
  {
    name: "Delivery Brand",
    category: CategoryEx,
    value: 32.64,
    date: new Date("03/11/2021"),
    ignore: false
  },
  {
    name: "Travel Brand",
    category: undefined,
    value: 48.05,
    date: new Date("03/11/2021"),
    ignore: false
  },
  {
    name: "Cloth Brand",
    category: undefined,
    value: 16.99,
    date: new Date("03/11/2021"),
    ignore: false
  }
]

export default ExpenseListExample