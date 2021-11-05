import { Expense } from '../src/models/expense'
import CategoryList from './categorylist'

const ExpenseListExample: Expense[] = [
  {
    name: "Delivery Brand",
    category: CategoryList[0],
    value: 32.64,
    date: new Date("03/10/2021"),
    ignore: false
  },
  {
    name: "Travel Brand",
    category: CategoryList[1],
    value: 48.05,
    date: new Date("30/09/2021"),
    ignore: false
  },
  {
    name: "Cloth Brand",
    category: CategoryList[2],
    value: 16.99,
    date: new Date("29/09/2021"),
    ignore: false
  },
  {
    name: "Streaming Brand",
    category: CategoryList[3],
    value: 16.99,
    date: new Date("28/09/2021"),
    ignore: false
  }
]

export default ExpenseListExample