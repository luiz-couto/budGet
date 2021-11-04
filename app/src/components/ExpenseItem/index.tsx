import React from 'react'
import {
  View,
  Text
} from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Expense } from '../../models/expense'

import styles from './styles.scss'

interface propsType {
  expense: Expense
}

const ExpenseItem = (props: propsType) => {
  const expense = props.expense
  return (
    <View style={styles.container}>
      <View style={styles.left_box}>
        <View style={styles.icon_box}>
          {
            expense.category ? 
            <MaterialIcon style={styles.circle_icon} name={"circle"} size={25} />
            :
            <FeatherIcon style={styles.help_icon} name={"help-circle"} size={35} />
          }
        </View>
        
        <View style={styles.text_box}>
          <Text style={styles.name_text}>{expense.name}</Text>
          <Text style={styles.category_text}>{expense.category}</Text>
        </View>
      </View>
      
      <View style={styles.right_box}>

        <View>
          <Text style={styles.text_value}>{expense.value}-</Text>
        </View>

        <View>
          <FeatherIcon style={styles.arrow_icon} name={"chevron-right"} size={23} />
        </View>
      </View>

    </View>
  );
}

export default ExpenseItem