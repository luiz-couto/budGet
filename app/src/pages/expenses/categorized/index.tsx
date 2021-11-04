import React from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './styles.scss'
import ExpenseItem from '../../../components/ExpenseItem'
import ExpenseEx from '../../../../fixtures/expense'

const Categorized = () => {
  return (
    <View style={styles.container}>
      <ExpenseItem expense={ExpenseEx}/>
    </View>
  );
}

export default Categorized