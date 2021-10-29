import React from 'react'
import {
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header'
import PressableOpacity from '../../components/PressableOpacity'

import styles from './styles.scss'

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
    </View>
  );
}

export default Expenses;