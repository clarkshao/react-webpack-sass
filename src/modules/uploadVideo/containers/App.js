import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginBtn from '../components/LoginBtn'
import { handleClick } from '../actions'


/*function loadData(props) {
    const { fullName } = props
    props.loadRepo(fullName, [ 'description' ])
    props.loadStargazers(fullName)
}*/

class App extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.handleClick()
    }

    render() {
        const { btnText } = this.props
        return (
            <div>
                <LoginBtn type={btnText}
                onClick={this.handleClick} />
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        btnText: state.btnText
    }
}


export default connect(mapStateToProps,{
    handleClick
})(App)