import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/login.js'

ReactDOM.render(<Login></Login>, document.querySelector('#app'))
if (module.hot) {
	module.hot.accept();
}