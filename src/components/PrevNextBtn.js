import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Btn from './Btn';
import './PrevNextBtn.css';

let result = {};

export default class PrevNextBtn extends Component {
    constructor(props) {
        super(props);
    }

    getResult(typeSum) {
        let sum = {};
        typeSum.forEach(function (index) {
            sum[index] = 0;
        });
        typeSum.forEach(function (item) {
            for(let index in typeSum[item]) {
                sum[item] = sum[item] + typeSum[item][index];
            }
        });
        return sum;
    }

    /**
     * 存储结果
     * @params num number 选项号
     * @params num value 选项号对应的值
     * @return setQuestionData array 当前题目数据
     * */
    setResult(num,value) {
        let index = this.props.currentIndex;
        let type = this.props.questionData['type'];
        //questionData[index]['clickedFlag'] = true;
        console.log(questionData);
        questionData[index]['clickedNum'] = num;
        typeSum[type][index] = value;
        if(index == questionsSum-1) {
            result = this.getResult(typeSum);
        }
    }

    /**
     * 渲染 prev button,next button
     * @params num currentIndex 当前按钮号
     * @params num lastIndex 最后一个按钮的index
     * @params bool 当前按钮是否点击过FLag
     * @return render 渲染结果
     * */
    rendPrevNextBtn({currentIndex,questionData,lastIndex,clickedFlag,result}) {
        switch(currentIndex) {
            case 0:
                return (
                    <div className="btn-component">
                        <Btn className='next' btnClick={ () => this.props.prevNextBtn(currentIndex,questionData,'next') } children='next' />
                    </div>
                );
            case lastIndex:
                return (
                    <div className="btn-component">
                        <Btn className='prev' btnClick={ () => this.props.prevNextBtn(currentIndex,questionData,'prev') } children='prev' />
                        <Link className='next' to={{ pathname: '/result', state: { result:result } }}>result</Link>
                    </div>
                );
            default :
                return (
                    <div className="btn-component">
                        <Btn className='prev' btnClick={ () => this.props.prevNextBtn(currentIndex,questionData,'prev') } children='prev' />
                        <Btn className='next' btnClick={ () => this.props.prevNextBtn(currentIndex,questionData,'next') } children='next' />

                    </div>
                );
        }
    }

    //绘制界面
    render() {
        console.log(this.props);
        let { currentIndex,questionData,clickedFlag,btnSum } = this.props;
        let lastIndex = btnSum-1;
        result = this.setResult();
        return this.rendPrevNextBtn({currentIndex,questionData,lastIndex,clickedFlag,result});
    }
}