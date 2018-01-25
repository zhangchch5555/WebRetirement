import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PreNextBtn.css';

export default class PrevNextBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false
        }
    }

    onPrevClick(index) {
        this.props.callback(--index);
    }

    onNextClick(index,clickedFlag) {
        if(clickedFlag) {
            this.props.callback(++index);
        } else {
            alert('请选题');
        }
    }

    /**
     * 渲染 prev button,next button
     * @params num currentIndex 当前按钮号
     * @params num lastIndex 最后一个按钮的index
     * @params bool 当前按钮是否点击过FLag
     * @return render 渲染结果
     * */
    rendPrevNextBtn(currentIndex,lastIndex,clickedFlag,result) {
        switch(currentIndex) {
            case 0:
                return (
                    <div className="btn-component">
                        <div className="next" onClick={ () => this.onNextClick(currentIndex,clickedFlag) }>next</div>
                    </div>
                );
            case lastIndex:
                return (
                    <div className="btn-component">
                        <div className="prev" onClick={ () => this.onPrevClick(currentIndex) }>prev</div>
                        <Link to={{ pathname: '/result', state: { result:result } }}>result</Link>
                    </div>
                );
            default :
                return (
                    <div className="btn-component">
                        <div className="prev" onClick={ () => this.onPrevClick(currentIndex) }>prev</div>
                        <div className="next" onClick={ () => this.onNextClick(currentIndex,clickedFlag) }>next</div>
                    </div>
                );
        }
    }

    //绘制界面
    render() {
        let currentIndex = this.props.currentIndex;
        let lastIndex = this.props.btnSum-1;
        let clickedFlag = this.props.clickedFlag;
        let result = this.props.result;
        return this.rendPrevNextBtn(currentIndex,lastIndex,clickedFlag,result);
    }
}