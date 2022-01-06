import React from 'react'
import {
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Switch
} from 'native-base'
import DetailInput from '../../components/DetailInput';

import styles from './styles.scss';

const ExpenseDetails = () => {
  return (
    <View>
      <DetailInput
        icon={<Icon name={"notes"} size={25} style={styles.default_icon} />}
        value={"My expense"}
        placeholder={"Expense name"}
      />
      <DetailInput
        icon={<Icon name={"help-outline"} size={25} style={styles.default_icon} />}
        value={""}
        placeholder={"Category"}
      />
      <DetailInput
        icon={<Icon name={"attach-money"} size={25} style={styles.default_icon} />}
        value={""}
        placeholder={"Value"}
        textInputStyle={styles.colored_text}
      />
      <DetailInput
        icon={<Icon name={"insert-invitation"} size={25} style={styles.default_icon} />}
        value={""}
        placeholder={"Date"}
      />
      <DetailInput
        icon={<Icon name={"remove-red-eye"} size={25} style={styles.eye_icon} />}
        value={"Ignore Expense"}
        placeholder={""}
        editable={false}
        outerBoxStyle={styles.ignore_box}
        rightElement={
          <Switch 
            offTrackColor={'rgba(0,0,0,0.2)'}
            onTrackColor={'#ff9f97'}
            onThumbColor={'#F4776B'}
          />
        }
      />
    </View>
  );
}

export default ExpenseDetails;