import React from 'react'
import {
  View,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Header from '../../components/Header'
import PressableOpacity from '../../components/PressableOpacity'
import ExpenseList from '../../components/ExpenseList'
import RoundButton from '../../components/RoundButton'
import ExpenseListExample from '../../../fixtures/expenselist'

import styles from './styles.scss'

const Tab = createMaterialTopTabNavigator()

const Uncategorized = () => {
  const expenses = ExpenseListExample.filter((expense) => expense.category == undefined)
  return (
    <View style={styles.list_container}>
      <ExpenseList expenses={expenses}/>
    </View>
  );
}

const Categorized = () => {
  const expenses = ExpenseListExample.filter((expense) => expense.category)
  return (
    <View style={styles.list_container}>
      <ExpenseList expenses={expenses}/>
    </View>
  );
}

const Expenses = () => {
  return (
    <View>
      <Header 
        title={'Expenses'}
        leftElement={
          <PressableOpacity
            onClick={() => console.log('left arrow button clicked')}
          >
            <Icon style={styles.icon_left} name={"chevron-left"} size={35} />
          </PressableOpacity>
        }
        rightElement={
          <PressableOpacity
            onClick={() => console.log('right arrow button clicked')}
          >
            <Icon style={styles.icon_right} name={"chevron-right"} size={35} />
          </PressableOpacity>
        }
      />
      <View style={styles.tab_bar_box}>
        <Tab.Navigator 
          screenOptions={{
            tabBarLabelStyle: styles.tab_bar_label,
            tabBarItemStyle: styles.tab_bar_item,
            tabBarStyle: { ...styles.tab_bar, elevation: 0 },
            tabBarIndicatorStyle: styles.tab_bar_indicator

          }}
        >
          <Tab.Screen name="Uncategorized" component={Uncategorized} />
          <Tab.Screen name="Categorized" component={Categorized} />
        </Tab.Navigator>
      </View>

      <View style={styles.button_box}>
        <RoundButton 
          text={'+ Expense'}
          onClick={() => console.log('add expense clicked')}
        > 
          <View style={styles.inner_button_box}>
            <Icon style={styles.icon_plus} name={"plus"} size={25} />
            <Text style={styles.expense_text}>Expense</Text>
          </View>
        </RoundButton>
      </View>

    </View>
  );
}

export default Expenses;