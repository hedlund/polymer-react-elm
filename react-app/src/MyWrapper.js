import React, { Component } from 'react';

class MyWrapper extends Component {

    render() {
        return <my-element name={this.props.name} />;
    }
}

export default MyWrapper;