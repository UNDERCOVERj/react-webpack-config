import React from 'react'
import Styles from '../static/css/base.css'

function Comment (props) {
	return (
			<h2>{props.name}</h2>
		)
}

class Dialog extends React.Component {
	constructor () {
		super();
		this.showInfo = this.showInfo.bind(this);
	}
	showInfo () {
		alert('ahaha');
		window.location.href = "login.html";
		alert("foobar".includes("foo"))
	}
	render () {
		return (
			<div className={Styles.demo}>
				llsjikkjjkjkjiodjoinnnnddd
				<Comment name="lejunjiedddsssddddddddsssss"></Comment>
				<button onClick={this.showInfo} className={Styles.down}>clickssss me</button>
			</div>
		)
	}
}
export default Dialog 