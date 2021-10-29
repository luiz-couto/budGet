import React from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './styles.scss';

interface propsType {
  title: string
  leftElement?: JSX.Element
  rightElement?: JSX.Element
}

const Header = (props: propsType) => {
  return (
    <View style={styles.header_box}>
      <View style={styles.header_element}>
        {props.leftElement}
      </View>
      <View style={styles.header_title_box}>
        <Text style={styles.header_title}>
          {props.title}
        </Text>
      </View>
      <View style={styles.header_element}>
        {props.rightElement}
      </View>
    </View>
  );
}

export default Header;