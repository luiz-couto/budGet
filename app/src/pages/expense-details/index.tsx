import React, {useState} from 'react'
import {
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Switch
} from 'native-base'

import DetailInput from '../../components/DetailInput';
import HeaderView from './HeaderView';
import HeaderEdit from './HeaderEdit';

import styles from './styles.scss';

import ExpenseExample from '../../../fixtures/expense';

const ExpenseDetails = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(ExpenseExample.name);
  const [category, setCategory] = useState(ExpenseExample.category);
  const [value, setValue] = useState(ExpenseExample.value);
  const [date, setDate] = useState(ExpenseExample.date);

  return (
    <View>
      {
        editMode ? 
        <HeaderEdit 
          onClickCancel={() => {
            setEditMode(false)
            console.log("cancel button clicked")
          }}
          onClickDone={() => console.log("done button clicked")}
          onClickReplay={() => console.log("replay button clicked")}
        />
        :
        <HeaderView
          onClickBack={() => console.log('left arrow button clicked')}
          onClickEdit={() => {
            setEditMode(true)
            console.log('edit button clicked')
          }}
        />
      }
      <View style={styles.form_box}>
        <DetailInput
          icon={<Icon name={"notes"} size={25} style={styles.default_icon} />}
          value={name}
          hookChange={setName}
          placeholder={"Expense name"}
          editable={editMode}
        />
        <DetailInput
          icon={<Icon name={"help-outline"} size={25} style={styles.default_icon} />}
          value={category?.name || ""}
          placeholder={"Category"}
          editable={editMode}
        />
        <DetailInput
          icon={<Icon name={"attach-money"} size={25} style={styles.default_icon} />}
          value={value.toString()}
          hookChange={setValue}
          placeholder={"Value"}
          textInputStyle={styles.colored_text}
          editable={editMode}
        />
        <DetailInput
          icon={<Icon name={"insert-invitation"} size={25} style={styles.default_icon} />}
          value={date.toDateString()}
          placeholder={"Date"}
          editable={editMode}
        />
        <DetailInput
          icon={<Icon name={"remove-red-eye"} size={25} style={styles.eye_icon} />}
          value={"Ignore Expense"}
          placeholder={""}
          editable={false}
          outerBoxStyle={styles.ignore_box}
          rightElement={
            <Switch 
              offTrackColor={'rgba(0,0,0,0.2)'}
              onTrackColor={'#ff9f97'}
              onThumbColor={'#F4776B'}
            />
          }
        />
      </View>
    </View>
  );
}

export default ExpenseDetails;