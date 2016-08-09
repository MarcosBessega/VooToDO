import React from 'react'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToolBar from './toolbar'

const Root = ({store}) => (
	<Provider store={store}>
		<MuiThemeProvider>
			<ToolBar />
		</MuiThemeProvider>
	</Provider>
)

export default Root
