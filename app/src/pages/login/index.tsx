import React, { useState, useEffect } from 'react'
import { View, Text, Image, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { Divider } from 'native-base';

import RoundInput from '../../components/RoundInput';
import RoundButton from '../../components/RoundButton';
import PressableOpacity from '../../components/PressableOpacity';

import styles from './styles.scss'

const Login = () => {

	const [isKeyboardVisible, setKeyboardVisible] = useState(false);

 	useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);


	return (
		<View style={styles.container}>
			<View style={styles.logo_container}>
				<Image resizeMode={'contain'} style={styles.piggy_icon} source={require('../../../assets/images/piggy.png')} />
				{
					!isKeyboardVisible && 
					<Text style={styles.app_name_text}>budGet</Text>
				}
			</View>

			<View style={styles.sign_in_container}>
				{/* <Icon name={"expand-more"} size={45} color="#900" /> */}
				<View style={styles.sign_in_text_box}>
					<Text style={styles.sign_in_text}>SIGN IN</Text>
				</View>
				
				<View style={styles.email_input_box}>
					<RoundInput 
						icon= { <Icon style={styles.user_icon} name={"user"} size={25} /> }
						placeholder='Email'
					/>
				</View>

				<View style={styles.password_input_box}>
					<RoundInput 
						icon= { <Icon style={styles.user_icon} name={"lock"} size={25} /> }
						placeholder='Password'
						password={true}
					/>
				</View>

				<View style={styles.button_container}>
					<RoundButton 
						text={'LOGIN'}
						onClick={() => { console.log('login button clicked') }}
					/>
				</View>
				
				<View style={styles.footer_box}>
					<PressableOpacity
						onClick={() => {console.log('forgot password button clicked')}}
					>
						<View style={styles.footer_text_box}>
							<Text style={styles.footer_text}>Forgot Password</Text>
						</View>
					</PressableOpacity>
					
					<Divider orientation={'vertical'}/>
					
					<PressableOpacity
						onClick={() => {console.log('register button clicked')}}
					>
						<View style={styles.footer_text_box}>
							<Text style={styles.footer_text}>Register</Text>
						</View>
					</PressableOpacity>
				</View>

			</View>
		</View>
	);
}

export default Login