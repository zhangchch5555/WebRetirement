import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Btn from './Btn';
import './PrevNextBtn.css';

export default class PrevNextBtn extends Component {
    constructor(props) {
        super(props);
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
                        <Btn className='next' btnClick={ () => this.props.prevNextBtn(currentIndex,questionData,'next') } children='next' />
                        <Btn className='prev' btnClick={ () => this.props.prevNextBtn(currentIndex,questionData,'prev') } children='prev' />
                    </div>
                );
        }
    }

    //绘制界面
    render() {
        let { currentIndex,questionData,clickedFlag,btnSum,result } = this.props;
        let lastIndex = btnSum-1;
        return this.rendPrevNextBtn({currentIndex,questionData,lastIndex,clickedFlag,result});
    }
}