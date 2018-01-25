import React, {Component} from "react";
import OptionItem from "./OptionItem";

// 选项集合组件
export default class OptionsList extends Component {
    constructor(props) {
        super(props);
        this.setActiveOption = this.setActiveOption.bind(this);
    }

    /**
     * 响应选项组件点击事件，回调，实现重新渲染
     * @params num number 被选中的选项的编号
     * */
    setActiveOption(num,value) {
        this.props.callbackResetState(num,value);
    }

    //绘制界面
    render() {
        let clickedNum = this.props.clickedNum;
        let options = this.props.options;
        let optionsList = [];
        for(let option in options) {
            optionsList.push(
                <OptionItem selectedNum={ clickedNum } key={ option } option={ options[option] } setActiveOption={ this.setActiveOption } />
            );
        }
        return (
            <div>{ optionsList }</div>
        )
    }
}