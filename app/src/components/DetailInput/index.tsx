import React from 'react';
import {
  View,
  TextInput
} from 'react-native';

import styles from './styles.scss';

interface propsType {
  value: string
  placeholder: string
  icon: JSX.Element
  editable?: boolean
  textInputStyle?: Object
  rightElement?: JSX.Element
  outerBoxStyle?: Object
  hookChange?: React.Dispatch<React.SetStateAction<any>>
}

const DetailInput = (props: propsType) => {
  return (
    <View style={{ ...styles.input_box, ...props.outerBoxStyle }}>
      <View style={styles.left_box}>
        {props.icon}
      </View>
      <View style={styles.right_box}>
        <TextInput
          onChangeText={props.hookChange}
          value={props.value}
          editable={props.editable}
          style={{...styles.text_input, ...props.textInputStyle }}
          placeholder={props.placeholder}
        />
        {props.rightElement}
      </View>
    </View>
  );
}

export default DetailInput


