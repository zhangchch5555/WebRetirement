import { combineReducers } from 'redux'
import { PREV, NEXT, OPTION, SELECT, RESET,PREVBUTTON,NEXTBUTTON, REQUEST_SUCCESS, REQUEST_FAIL } from '../actions/index'

let initState = {
    currentIndex: 0,
    clickFlag: false,
    selectedNum: -1,
    questionData: {}
}

/**
 * 点击前进后退按钮及选项的reducer函数
 * @params state 当前的state
 * @params action 前进后退按钮及选项action
 * @return 点击后的state
 * */
const questionList  = (state=initState,action) => {
    switch (action.type) {
        case OPTION:
            return Object.assign({},state,{
                clickFlag: action.clickFlag,
                selectedNum: action.selectedNum,
                value: action.value,
            })
        case PREVBUTTON:
            return Object.assign({},state,{
                currentIndex: action.currentIndex,
            })
        case NEXTBUTTON:
            return Object.assign({},state,{
                currentIndex: action.currentIndex,
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
            initState.questionData = action.questionData;
            return Object.assign({},state,{questionData: action.questionData})
        case REQUEST_FAIL:
            return Object.assign({},state,{message: action.message})
        default:
            return state
    }
}

const appReducer = combineReducers({
    questionList,
    fetchQuestionData,
})

export default appReducer


