import React from 'react'
import {
  View
} from 'react-native'

import styles from './styles.scss'
import ExpenseList from '../../../components/ExpenseList'
import ExpenseListExample from '../../../../fixtures/expenselist'

const Uncategorized = () => {
  const expenses = ExpenseListExample.filter((expense) => expense.category == undefined)

  return (
    <View style={styles.container}>
      <ExpenseList expenses={expenses}/>
    </View>
  );
}

export default Uncategorized