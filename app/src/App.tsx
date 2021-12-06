import React from 'react'
import { 
	View,
	LogBox
} from 'react-native'

import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'

import AppStyles from './App.scss'

import Login from './pages/login'
import Expenses from './pages/expenses'
import ExpenseDetails from './pages/expense-details'

/*
It seens that native base has a cycle in its dependencies, creating a warning.
Check if this is still needed in the future
*/
LogBox.ignoreLogs([
	'Require cycle: node_modules/native-base'
])

const App = () => {
	return (
		<NavigationContainer>
			<NativeBaseProvider>
				<View>
					<ExpenseDetails />
				</View>
			</NativeBaseProvider>
		</NavigationContainer>
	);
}

export default App