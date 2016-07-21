import React, { Component } from 'react'


class LoginBtn extends Component {

    constructor(props) {
        super(props)
        this.handleGoClick = this.handleGoClick.bind(this)
    }

    handleGoClick() {
        this.props.onClick()
    }
    render() {
        const { type } = this.props
        return (
            <div id="signinButton" className="pre-sign-in">
                <span className="icon">G+</span>
                <span className="buttonText" onClick={this.handleGoClick}>{ type }</span>
            </div>
        )
    }
}

export default LoginBtn