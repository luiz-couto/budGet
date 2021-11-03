import { Expense } from '../../src/models/expense'

const ExpenseListExample: Expense[] = [
  {
    name: "Delivery Brand",
    category: "food",
    value: 32.64,
    date: new Date("03/11/2021"),
    ignore: false
  },
  {
    name: "Travel Brand",
    category: "travels",
    value: 48.05,
    date: new Date("03/11/2021"),
    ignore: false
  },
  {
    name: "Cloth Brand",
    category: "clothes",
    value: 16.99,
    date: new Date("03/11/2021"),
    ignore: false
  }
]

export default ExpenseListExample