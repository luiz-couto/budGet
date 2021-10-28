import React, { useState } from 'react'
import {
  View,
  Text,
  Pressable
} from 'react-native'

import styles from './styles.scss';

const FULL_OPACITY = 1
const PRESSED_OPACITY = 0.3

interface propsType {
  text: string
  onClick: () => void
}

const RoundButton = (props: propsType) => {

  const [opacity, setOpacity] = useState(FULL_OPACITY);

  return (
    <Pressable
      onPressIn={() => {
        setOpacity(PRESSED_OPACITY)
      }}
      onPressOut={() => {
        setOpacity(FULL_OPACITY)
        props.onClick()
      }}
    >
      <View style={{ ...styles.button_box, elevation: 7, opacity: opacity }}>
        <Text style={styles.button_text}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default RoundButton;