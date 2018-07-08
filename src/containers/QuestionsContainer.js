import { connect } from 'react-redux'
import { optionClick,option } from '../actions/index'
import Questions from '../components/Questions'

const mapStateToProps = (state) => {
    if( state.fetchQuestionData.questionData.length > 0 ) {
        let selectedNum = state.questionList.clickFlag ? state.questionList.selectedNum : -1;
        return {
            selectedNum: selectedNum,
            questionData:state.fetchQuestionData.questionData[state.questionList.currentIndex],
        }
    } else {
        return {
            selectedNum: '',
            questionData:[],
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        optionClick: (num, val) => {
            dispatch(option(num, val))
        }
    }
}

const QuestionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions)

export default QuestionsContainer