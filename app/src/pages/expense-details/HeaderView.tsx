import React from "react";

import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import PressableOpacity from '../../components/PressableOpacity';

import styles from './styles.scss';

interface propsType {
  onClickBack: Function
  onClickEdit: Function
}

const HeaderView = (props: propsType) => {
  return (
    <Header 
      title={'Expense Details'}
      leftElement={
        <PressableOpacity
          onClick={() => props.onClickBack()}
        >
          <FeatherIcon style={styles.icon_left} name={"chevron-left"} size={35} />
        </PressableOpacity>
      }
      rightElement={
        <PressableOpacity
          onClick={() => props.onClickEdit()}
        >
          <Icon style={styles.default_icon} name={"mode-edit"} size={27} />
        </PressableOpacity>
      }
    />
  );
}

export default HeaderView;
