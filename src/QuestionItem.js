import React, { Component } from 'react';

export default class QuestionItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let question = this.props.question;
        if(question.text) {
            return (
                <div>
                    <div style={{textAlign: "center", fontSize: 16, padding: 20}}>{ question.text }</div>
                </div>
            )
        }
        if(question.url) {
            return (
                <div>
                    <img src={ question.url } />
                </div>
            )
        }
    }
}


