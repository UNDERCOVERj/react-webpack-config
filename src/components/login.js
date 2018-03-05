import React from 'react'
import Styles from '../static/css/login.css'
import Comment from '@/comment'

class Login extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			type: 1
		}
		this.changeType = this.changeType.bind(this)
	}
	changeType (type) {
		console.log(type)
		this.setState({
			type: type
		})
	}
	render () {
		return (
				<div className={Styles.login}>
					<div>
						<Comment></Comment>
						<div>kdjkd</div>
						<span 
							onClick={() => this.changeType(1)} 
							className={this.state.type == 1 ? Styles.active : Styles.notActive}>登录111</span>
						<span 
							onClick={() => this.changeType(2)} 
							className={this.state.type == 2 ? Styles.active : Styles.notActive}>注册222ssss</span>
					</div>
				</div>
			)
	}
}
export default Login