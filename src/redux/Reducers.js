import { combineReducers } from 'redux'
import { PREV, NEXT, SELECT, REQUEST_SUCCESS, REQUEST_FAIL } from '../actions/index'

let initState = {
    currentIndex: 0,
    clickFlag: false,
    selectedNum: -1,
    questionData: []
}

/**
 * 点击前进后退按钮的reducer函数
 * @params state 当前的state
 * @params action 前进后退按钮action
 * @return 点击后的state
 * */
const prevNextBtn = (state=initState,action) => {
    switch (action.type) {
        case PREV:
            return Object.assign({},state,{currentIndex: action.currentIndex,questionData:action.questionData})
        case NEXT:
            return Object.assign({},state,{currentIndex: action.currentIndex,questionData:action.questionData})
        default:
            return state
    }
}

/**
 * 点击选项后的reducer函数
 * @params state 当前的state
 * @params action 选项action
 * @return 点击后的state
 * */
const optionClick = (state=initState,action) => {
    switch (action.type) {
        case SELECT:
            return Object.assign({},state,{
                clickFlag: action.clickFlag,
                selectedNum: action.selectedNum,
            })
        default:
            return state
    }
}

/**
 * 异步获取api数据的reducer函数
 * @params state 当前的state
 * @params action 选项action
 * @return 成功获取api数据的state
 * */
const fetchQuestionData = (state=initState,action) => {
    switch (action.type) {
        case REQUEST_SUCCESS:
            return Object.assign({},state,{questionsData: action.questionsData})
        case REQUEST_FAIL:
            return Object.assign({},state,{message: action.message})
        default:
            return state
    }
}

const appReducer = combineReducers({
    prevNextBtn,
    optionClick,
    fetchQuestionData,
})

export default appReducer


