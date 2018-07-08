import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Btn from './Btn';
import './PrevNextBtn.css';

let result = {};
let typeSum = [];

export default class PrevNextBtn extends Component {
    constructor(props) {
        super(props);
    }

    getResult(typeSum) {
        let sum = {};
        let typeArr = Object.keys(typeSum);
        typeArr.forEach((type) => {
            sum[type] = 0;
        });
        typeArr.forEach((type) => {
            for(let index in typeSum[type]) {
                sum[type] = sum[type] + typeSum[type][index];
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
    setResult(num, value, btnSum) {
        let index = this.props.currentIndex;
        let type = this.props.questionData['type'];
        typeSum[type] = {};
        //questionData[index]['clickedFlag'] = true;
        //questionData[index]['clickedNum'] = num;
        typeSum[type][index] = value;
        if(index == btnSum-1) {
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
        let { currentIndex,questionData,clickedFlag,btnSum,value,selectedNum } = this.props;
        let lastIndex = btnSum-1;
        if(questionData) {
            this.setResult(selectedNum, value, btnSum);
        }
        return this.rendPrevNextBtn({currentIndex,questionData,lastIndex,clickedFlag,result});
    }
}