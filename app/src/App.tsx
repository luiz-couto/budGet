import React from 'react'
import { 
	View,
	LogBox
} from 'react-native'

import { NativeBaseProvider } from 'native-base'

import AppStyles from './App.scss'
import Login from './pages/login'

/*
It seens that native base has a cycle in its dependencies, creating a warning.
Check if this is still needed in the future
*/
LogBox.ignoreLogs([
	'Require cycle: node_modules/native-base'
])

const App = () => {
	return (
		<NativeBaseProvider>
			<View>
				<Login />
			</View>
	  </NativeBaseProvider>
	);
}

export default App