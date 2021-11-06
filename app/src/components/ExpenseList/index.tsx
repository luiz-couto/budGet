import React from 'react'
import {
  View
} from 'react-native'
import { Expense } from '../../models/expense'

const FIRST_MONTH = 1
const LAST_MONTH = 12

const FIRST_DAY = 1
const LAST_DAY = 31

interface propsType {
  expenses: Expense[]
}

interface DailyData {
  title: string
  data: Expense[]
}

interface MonthlyData {
  title: string
  data: DailyData[]
}

const getFilteredExpenseList = (expenseList: Expense[]) => {
  let expenses: MonthlyData[] = []

  for(let month=FIRST_MONTH; month<=LAST_MONTH; month++) {
    let monthlyExpenses = expenseList.filter((expense) => {
      return month == expense.date.getMonth() + 1
    })

    if(monthlyExpenses.length == 0) continue

    let monthlyData: MonthlyData = {
      title: month.toString(),
      data: []
    }

    for(let day=FIRST_DAY; day<=LAST_DAY; day++) {
      let dailyExpenses = monthlyExpenses.filter((expense) => {
        return day == expense.date.getDate()
      })

      if(dailyExpenses.length == 0) continue

      monthlyData.data.push({
        title: day.toString(),
        data: dailyExpenses
      })

    }

    expenses.push(monthlyData)
  }

  return expenses
}

const ExpenseList = (props: propsType) => {
  const filteredExpenses = getFilteredExpenseList(props.expenses)
  return (
    <View>
      
    </View>
  );
}

export default ExpenseList
