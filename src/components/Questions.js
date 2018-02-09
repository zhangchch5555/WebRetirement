import React, { Component } from 'react'
import QuestionsList from './QuestionsList'
import OptionsList from './OptionsList'
import Title from './Title'

export default class Questions extends Component {
    constructor(props) {
        super(props);
    }

    //绘制界面
    render() {
        let { optionClick,selectedNum } = this.props;
        let { questions,options,title } = this.props.questionData;
        return(
                <div>
                    <Title title={ title } />
                    <QuestionsList questions={ questions } />
                    <OptionsList selectedNum={ selectedNum } options={ options } optionClick={ optionClick } />
                </div>
        )
    }
}