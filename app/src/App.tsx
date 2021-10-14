import React from 'react'
import { 
	View,
	Text
} from 'react-native'

import AppStyles from './App.scss'

const App = () => {
	return (
		<View style={AppStyles.container}>
			<Text>Hello World!</Text>
		</View>
	);
}

export default App