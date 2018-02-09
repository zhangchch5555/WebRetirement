import React, {Component} from "react";
import OptionItem from "./OptionItem";

// 选项集合组件
export default class OptionsList extends Component {
    constructor(props) {
        super(props);
    }

    //绘制界面
    render() {
        let { selectedNum,options,optionClick } = this.props;
        let optionsList = [];
        for(let option in options) {
            optionsList.push(
                <OptionItem selectedNum={ selectedNum } key={ option } option={ options[option] } optionClick={ optionClick } />
            );
        }
        return (
            <div>{ optionsList }</div>
        )
    }
}