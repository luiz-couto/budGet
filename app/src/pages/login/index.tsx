import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

import RoundInput from '../../components/RoundInput';

import styles from './styles.scss'

const Login = () => {
	return (
		<View style={styles.container}>
			<View style={styles.logo_container}>

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


			</View>
		</View>
	);
}

export default Login