import React, {Component} from "react";
import "./OptionItem.css";

export default class OptionItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { num,value,text } = this.props.option;
        let optionClick = this.props.optionClick;
        let selectedNum = this.props.selectedNum;
        return (
            <div onClick={ () => optionClick(num,value) } className={ num === selectedNum ? 'common active' : 'common item' }>
                { text }
            </div>
        )
    }
}
