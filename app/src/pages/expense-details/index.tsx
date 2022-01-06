import React from 'react'
import {
  View,
  Text
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather';
import DetailInput from '../../components/DetailInput';

import styles from './styles.scss';

const ExpenseDetails = () => {
  return (
    <View>
      <DetailInput
        icon={<Icon name={"menu"} size={25} style={styles.name_icon} />}
        text={"My expense"}
        placeholder={"Expense name"}
      />
    </View>
  );
}

export default ExpenseDetails;