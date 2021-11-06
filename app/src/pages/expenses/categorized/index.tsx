import React from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './styles.scss'
import ExpenseList from '../../../components/ExpenseList'
import ExpenseListExample from '../../../../fixtures/expenselist'

const Categorized = () => {
  return (
    <View style={styles.container}>
      <ExpenseList expenses={ExpenseListExample}/>
    </View>
  );
}

export default Categorized