/**
 * hello.js
 * Created by clark on 16/4/28.
 */
import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}!!!!!~~
                <div className='wait'>wait a minute</div>
            </h1>
        );
    }
}

module.exports = Hello