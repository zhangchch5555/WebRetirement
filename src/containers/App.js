import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrevNextContainer from './PrevNextContainer'
import QuestionsContainer from './QuestionsContainer'
import PropTypes from 'prop-types'
import { fetchPosts } from '../actions/index'
import API from '../utils/Api';

// 存储抽中的题库数据
var questionsData = [];
// 题库数量初始化
var questionsSum = 0;

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            currentData: null,
            isModal: true
        };
    }

    /**
     * state数据设置
     * params index int 当前题号(从0开始)
     * */
    setCurrentData(index) {
        this.setState({
            currentIndex: index,
            currentData: questionsData[index]
        });
    }

    //get api data after mount
    componentDidMount() {
        const url = 'https://private-b4dc1-zhang2.apiary-mock.com/questions';

        API.fetchApiData(url)
            .then((result)=> {
                questionsData = result;
                questionsSum = questionsData.length;
                this.setCurrentData(this.state.currentIndex);
            },(e) => {
            // error
        })

        // todo 此处需要整理思路
        //store.dispatch(fetchPosts(url));
    }

    render(){
        if(questionsData.length === 0) {..
            return (<div style={{textAlign: "center", fontSize: 16, padding: 20}}>加载中......</div>)
        }
        let initQuestionData = questionsData[0];
        return (
            <div>
                <QuestionsContainer questionData={ initQuestionData } />
                <PrevNextContainer currentIndex={ this.state.currentIndex } questionData={ initQuestionData } btnSum={ questionsSum } />
            </div>
        )
    }
}