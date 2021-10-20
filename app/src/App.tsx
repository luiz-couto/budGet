import React from 'react'
import { 
	View
} from 'react-native'

import { NativeBaseProvider } from 'native-base'

import AppStyles from './App.scss'
import Login from './pages/login'

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