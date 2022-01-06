import React from 'react';
import {
  View,
  TextInput
} from 'react-native';

import styles from './styles.scss';

interface propsType {
  text: string
  textInputStyle?: Object
  placeholder: string
  icon: JSX.Element
  rightElement?: JSX.Element
  outerBoxStyle?: Object
}

const DetailInput = (props: propsType) => {
  return (
    <View style={{ ...styles.input_box, ...props.outerBoxStyle }}>
      <View style={styles.left_box}>
        {props.icon}
      </View>
      <View style={styles.right_box}>
        <TextInput
          style={{...styles.text_input, ...props.textInputStyle }}
          placeholder={props.placeholder}
        />
        {props.rightElement}
      </View>
    </View>
  );
}

export default DetailInput


