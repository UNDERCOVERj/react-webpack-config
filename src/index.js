import React from 'react'
import ReactDOM from 'react-dom'
import Dialog from './components/dialog.js'
ReactDOM.render(<Dialog></Dialog>, document.querySelector('#app'));
if (module.hot) {
	module.hot.accept();
}