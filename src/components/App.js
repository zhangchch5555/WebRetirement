import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./Title";
import QuestionsList from "./QuestionsList";
import OptionsList from "./OptionsList";
import PrevNextBtn from "./PrevNextBtn";
import HttpData from "./HttpData";

// 存储抽中的题库数据
var questionsData = [];
// 题库数量初始化
var questionsSum = 0;

var typeSum = new Set();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            currentData: null,
            isModal: true
        };
        this.setCurrentData = this.setCurrentData.bind(this);
        this.setSelectedNum = this.setSelectedNum.bind(this);
    }

    /**
     * 记录已经选择的题目的选项号
     * @params num number 选项号
     * @params num value 选项号对应的值
     * @return setQuestionsData array 当前题目数据
     * */
    setSelectedNum(num,value) {
        let index = this.state.currentIndex;
        let type = questionsData[index]['type'];
        questionsData[index]['clickedFlag'] = true;
        console.log(questionsData);
        questionsData[index]['clickedNum'] = num;
        typeSum[type][index] = value;
        this.setCurrentData(index);
        this.result = {};
        if(index == questionsSum-1) {
            this.result = this.getResult(typeSum);
        }
    }

    initTypeSum() {
        questionsData.forEach(function (item) {
            typeSum.add(item['type']);
            for(let type of typeSum){
                typeSum[type] = {};
            }
        });
    }

    /**
     * state数据设置
     * params index int 当前题号
     * */
    setCurrentData(index) {
        this.setState({
            currentIndex: index,
            currentData: questionsData[index]
        });
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

    //get api data after mount
    componentDidMount() {
        const url = 'https://private-b4dc1-zhang2.apiary-mock.com/questions';
        HttpData.fetchApiListData(url).then((result) => {
            questionsData = result;
            questionsSum = questionsData.length;
            this.initTypeSum();
            this.setCurrentData(this.state.currentIndex);
        },(e) => {
            // error
        });
    }

    render() {
        let data = this.state.currentData;
        console.log(data);
        if (data) {
            return this.renderItem(data);
        }
        return (
            <div style={{textAlign: "center", fontSize: 16, padding: 20}}>加载中...</div>
        )
    }

    renderItem(data) {
        let clickedFlag = data['clickedFlag'];
        let clickedNum = data['clickedNum'];
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>first time try React</h2>
                </div>
                <div className="App-intro">
                    <Title title={ data.title } />
                    <QuestionsList questions={ data.questions } />
                    <OptionsList options={ data.options } clickedNum={ clickedNum } callbackResetState={ this.setSelectedNum } />
                    <PrevNextBtn currentIndex={ this.state.currentIndex } result={ this.result } btnSum={ questionsSum } clickedFlag={ clickedFlag } typeSum={ typeSum } callback={ this.setCurrentData } />
                </div>
            </div>
        );
    }
}

export default App;
