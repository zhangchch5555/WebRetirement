import React, {Component} from "react";
import style from "./OptionItem.css";

export default class OptionItem extends Component {
    constructor(props) {
        super(props);
    }

    changeSelectedItem(num,value) {
        this.props.setActiveOption(num,value);
    }

    render() {
        let {num,value,text} = this.props.option;
        let selectedNum = this.props.selectedNum;
        return (
            <div onClick={ () => this.changeSelectedItem(num,value) } className={ num == selectedNum ? 'active' : 'item' }>
                { text }
            </div>
        )
    }
}
