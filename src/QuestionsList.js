import React, { Component } from 'react';
import QuestionItem from "./QuestionItem";

// 题目集合组件
export default class QuestionsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let questions = this.props.questions;
        let questionsList = [];
        if(questions) {
            for(let [key,val] of questions.entries()) {
                questionsList.push(<QuestionItem key={ key } question={ val } />);
            }
        }
        return (
            <div>{ questionsList }</div>
        )
    }
}
