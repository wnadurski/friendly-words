import React, {Component} from "react";
import _ from 'lodash';
import BorderedButton from "../ui/borderedButton/BorderedButton";
import {speak} from '../../services/speaker';

export default class ReadingCommandButton extends Component {
	constructor(props){
		super(props);
		this.toggleAvailability = this.toggleAvailability.bind(this);
		this.readCommand = _.throttle(this.readCommand.bind(this), 2000, {'trailing': false});
		this.state = {
			isAvailable: true
		}
	}

	componentWillUnmount(){
	    console.log("command button cleanup!")
	    this.readCommand.cancel();
    }

	toggleAvailability(){
		this.setState((prevState) => ({isAvailable: !prevState.isAvailable}))
	}

	readCommand(){
		const {onStart, onDone, command} = this.props;
		speak(command, {
			onStart: () => {onStart && onStart(); this.toggleAvailability()},
			onDone: () => {onDone && onDone(); this.toggleAvailability()}
		});
	}

	render(){
		return <BorderedButton icon="sound" disabled={!this.state.isAvailable} onPress={this.readCommand}/>
	}
}