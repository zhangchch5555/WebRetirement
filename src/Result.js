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



[
    [
        {
            "title": "请选择图中有多少只鸡",
            "questions": [
                {
                    "url": "https://s3-ap-northeast-1.amazonaws.com/tokyoimg/chick.png"
                }
            ],
            "type":"判断",
            "options": [
                {
                    "num": 0,
                    "value": 1,
                    "text": "9只"
                },
                {
                    "num": 1,
                    "value": 0,
                    "text": "10只"
                },
                {
                    "num": 2,
                    "value": 0,
                    "text": "8只"
                },
                {
                    "num": 3,
                    "value": 0,
                    "text": "11只"
                }
            ]
        },
        {
            "title": "今年是哪年",
            "type":"反应",
            "options": [
                {
                    "num": 0,
                    "value": 0,
                    "text": "2015"
                },
                {
                    "num": 1,
                    "value": 0,
                    "text": "2017"
                },
                {
                    "num": 2,
                    "value": 0,
                    "text": "2019"
                },
                {
                    "num": 3,
                    "value": 1,
                    "text": "2018"
                }
            ]
        }
    ],
    [
        {
                "title": "请选择图中有多少只鸡",
                "questions": [
                    {
                        "url": "https://s3-ap-northeast-1.amazonaws.com/tokyoimg/chick.png"
                    }
                ],
                "type":"判断",
                "options": [
                    {
                        "num": 0,
                        "value": 1,
                        "text": "9只"
                    },
                    {
                        "num": 1,
                        "value": 0,
                        "text": "10只"
                    },
                    {
                        "num": 2,
                        "value": 0,
                        "text": "8只"
                    },
                    {
                        "num": 3,
                        "value": 0,
                        "text": "11只"
                    }
                ]
            },
        {
                "title": "今年是哪年",
                "type":"反应",
                "options": [
                    {
                        "num": 0,
                        "value": 0,
                        "text": "2015"
                    },
                    {
                        "num": 1,
                        "value": 0,
                        "text": "2017"
                    },
                    {
                        "num": 2,
                        "value": 0,
                        "text": "2019"
                    },
                    {
                        "num": 3,
                        "value": 1,
                        "text": "2018"
                    }
                ]
            }
    ],
    [
        {
                "title": "请选择图中有多少只鸡",
                "questions": [
                    {
                        "url": "https://s3-ap-northeast-1.amazonaws.com/tokyoimg/chick.png"
                    }
                ],
                "type":"判断",
                "options": [
                    {
                        "num": 0,
                        "value": 1,
                        "text": "9只"
                    },
                    {
                        "num": 1,
                        "value": 0,
                        "text": "10只"
                    },
                    {
                        "num": 2,
                        "value": 0,
                        "text": "8只"
                    },
                    {
                        "num": 3,
                        "value": 0,
                        "text": "11只"
                    }
                ]
            },
        {
                "title": "今年是哪年",
                "type":"反应",
                "options": [
                    {
                        "num": 0,
                        "value": 0,
                        "text": "2015"
                    },
                    {
                        "num": 1,
                        "value": 0,
                        "text": "2017"
                    },
                    {
                        "num": 2,
                        "value": 0,
                        "text": "2019"
                    },
                    {
                        "num": 3,
                        "value": 1,
                        "text": "2018"
                    }
                ]
            }
    ]
]