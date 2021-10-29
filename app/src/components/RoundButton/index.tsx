import React from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './styles.scss';

import PressableOpacity from '../PressableOpacity';

interface propsType {
  text: string
  onClick: () => void
}

const RoundButton = (props: propsType) => {
  return (
    <PressableOpacity
      onClick={props.onClick}
    >
      <View style={{ ...styles.button_box, elevation: 7 }}>
        <Text style={styles.button_text}>{props.text}</Text>
      </View>
    </PressableOpacity>
  );
}

export default RoundButton;