import React, { useState } from 'react'
import {
  Pressable
} from 'react-native';

const FULL_OPACITY = 1
const PRESSED_OPACITY = 0.25

interface propsType {
  onClick: () => void
  children: JSX.Element
}

const PressableOpacity = (props: propsType) => {

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
      style={{ opacity: opacity }}
    >
      {props.children}
    </Pressable>
  );
}

export default PressableOpacity;