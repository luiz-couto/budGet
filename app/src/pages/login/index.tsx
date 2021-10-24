import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles.scss'

const Login = () => {
	return (
		<View style={styles.container}>
			<View style={styles.logo_container}>

			</View>

			<View style={styles.sign_in_container}>
				<Icon name={"expand-more"} size={45} color="#900" />
				<Text>SIGN IN</Text>

			</View>
		</View>
	);
}

export default Login