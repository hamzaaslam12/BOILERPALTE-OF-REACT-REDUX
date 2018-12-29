import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeUserName} from '../Store/Action/action';



class Home extends Component {
    constructor(){
        super();
        this.state = {
            input: '',
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    _changeData = () => {
        console.log('event called');
        this.props.abc(this.state.input);
        this.setState({input: ''})
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.xyz}</h1>

    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input className="mdl-textfield__input" type="text" name="input" id="input" value = {this.state.input} onChange={this.changeHandler} />
    <label className="mdl-textfield__label" htmlFor="input">USER NAME...</label>
  </div>
<br />
               
{/* Accent-colored raised button with ripple */}
<button onClick={this._changeData} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
  CHANGE THE USER NAME
</button>
            </div>
        )
    }
}

function mapStateToProp(state){
    return({
        xyz: state.root.userName
    })
}
function mapDispatchToProp(dispatch){
    return({
        abc: (name) => { dispatch(changeUserName(name)) }
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Home);
