import React, {Component} from "react";
import './Result.css';

export default class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let result = this.props.location.state.result;
        const DEFAULT_VAL = [1,1,1,1,1,1];
        const DEFAULT_ROW = ['平均得分',...DEFAULT_VAL];

        let head = Object.keys(result);
        head.unshift('');
        result[''] = '得分';

        const resultHead = head.map(( item,index ) => {
            return <div key={index} className="table-cell">{ item }</div>
        });
        const resultData = head.map(( item,index ) => {
            return <div key={index} className="table-cell">{ DEFAULT_ROW[index] }</div>
        });
        const GenerateData = head.map(( item,index ) => {
            return <div key={index} className="table-cell">{ result[item] }</div>
        });
        return (
            <div className="table-box">
                <div className="table-row">{ resultHead }</div>
                <div className="table-row">{ resultData }</div>
                <div className="table-row">{ GenerateData }</div>
            </div>
        )
    }
}