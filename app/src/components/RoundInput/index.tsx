import React from 'react';
import {
  View,
  TextInput
} from 'react-native';

import styles from './styles.scss';

interface propsType {
  icon: JSX.Element,
  placeholder: string,
  size?: number,
  password?: boolean
}

const RoundInput = (props: propsType) => {
  return (
    <View style={styles.text_input_box}>
      {props.icon}
      <TextInput
        style={styles.text_input}
        placeholder={props.placeholder}
        secureTextEntry={props.password ? true : false}
      />
		</View>
  );
}

export default RoundInput;
