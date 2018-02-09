import React, { Component } from 'react';

export default class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let title = this.props.title;
        if(title) {
            return (
                <div>
                    <p style={{textAlign: "center", fontSize: 16, padding: 20}}>{ title }</p>
                </div>
            )
        }
        return (
            <div></div>
        )
    }
}