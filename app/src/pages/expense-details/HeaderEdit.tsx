import React from "react";
import {
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import PressableOpacity from '../../components/PressableOpacity';

import styles from './styles.scss';

interface propsType {
  onClickCancel: Function
  onClickDone: Function
  onClickReplay: Function
}

const HeaderEdit = (props: propsType) => {
  return (
    <Header 
      title={'Expense Details'}
      leftElement={
        <PressableOpacity
          onClick={() => props.onClickCancel()}
        >
          <Icon style={styles.icon_clear} name={"clear"} size={27} />
        </PressableOpacity>
      }
      rightElement={
        <View style={styles.right_icons_box}>
          <PressableOpacity
            onClick={() => props.onClickDone()}
          >
            <Icon style={styles.icon_done} name={"done"} size={27} />
          </PressableOpacity>
          <PressableOpacity
            onClick={() => props.onClickReplay()}
          >
            <Icon style={styles.default_icon} name={"replay"} size={27} />
          </PressableOpacity>
        </View>
      }
    />
  );
}

export default HeaderEdit;
