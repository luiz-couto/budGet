import React from 'react'
import {
  View,
  Text,
  SectionList
} from 'react-native'
import { Expense } from '../../models/expense'
import ExpenseItem from '../ExpenseItem'
import { Language, DateC } from '../../../constants/date'

import styles from './styles.scss'

const FIRST_MONTH = 1
const LAST_MONTH = 12

const FIRST_DAY = 1
const LAST_DAY = 31

const LANGUAGE: Language = 'english'

interface propsType {
  expenses: Expense[]
}

interface DailyData {
  title: string
  data: Expense[]
}

interface MonthlyData {
  title: string
  data: DailyData[][]
}

const getFilteredExpenseList = (expenseList: Expense[]) => {
  let expenses: MonthlyData[] = []

  for(let month=LAST_MONTH; month>=FIRST_MONTH; month--) {
    let monthlyExpenses = expenseList.filter((expense) => {
      return month == expense.date.getMonth() + 1
    })

    if(monthlyExpenses.length == 0) continue

    let monthlyData: MonthlyData = {
      title: getMonthName(month-1),
      data: []
    }

    let dailyArr: DailyData[] = []
    for(let day=LAST_DAY; day>=FIRST_DAY; day--) {
      let dailyExpenses = monthlyExpenses.filter((expense) => {
        return day == expense.date.getDate()
      })

      if(dailyExpenses.length == 0) continue

      dailyArr.push({
        title: `${day} ${getWeekdayName(dailyExpenses[0].date.getDay())}`,
        data: dailyExpenses
      })

    }
    monthlyData.data.push(dailyArr)
    expenses.push(monthlyData)
  }

  return expenses
}

const getMonthName = (monthNum: number) => {
  return DateC[LANGUAGE].months[monthNum]
}

const getWeekdayName = (weekdayNum: number) => {
  return DateC[LANGUAGE].weekdays[weekdayNum]
}

const ExpenseList = (props: propsType) => {
  const filteredExpenses = getFilteredExpenseList(props.expenses)
  return (
    <View style={styles.list_container}>
      <View style={styles.timeline}></View>
      <SectionList
        style={styles.section_list}
        sections={filteredExpenses}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({ section }) => (
          <View style={styles.month_header_box}>
            <Text style={styles.month_name}>{section.title}</Text>
            <Text style={styles.coin_sign_text}>R$</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <SectionList
            sections={item}
            renderSectionHeader={({ section }) => (
              <View style={styles.weekday_header_box}>
                <Text style={styles.weekday_text}>{section.title}</Text>
              </View>
            )}
            renderItem={({ item }) => (
              <View style={styles.expense_box}>
                <ExpenseItem expense={item}/>
              </View>
            )}
          />
        )}
      />
    </View>
  );
}

export default ExpenseList
