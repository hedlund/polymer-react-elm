import React, { Component } from 'react';

class MyWrapper extends Component {

    componentDidMount() {
        this.elem.addEventListener('changeTheName', this.props.onChangeTheName);
    }

    componentWillUnmount() {
        this.elem.removeEventListener('changeTheName', this.props.onChangeTheName);
    }

    render() {
        return <my-element name={this.props.name} ref={ e => this.elem = e } />;
    }
}

export default MyWrapper;