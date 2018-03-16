import { connect } from 'react-redux'
import { prevBtn,nextBtn } from '../actions/index'
import PrevNextBtn from '../components/PrevNextBtn'

const mapStateToProps = (state) => {
    if(state.fetchQuestionData.questionData.length > 0 ) {
        console.log(state);
        return {
            currentIndex: state.questionList.currentIndex,
            questionData:state.questionList.questionData[state.questionList.currentIndex],
            btnSum : state.questionList.questionData.length,
        }
    } else {
        return {
            currentIndex: state.currentIndex,
            questionData:state.fetchQuestionData.questionData[0],
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        prevNextBtn: (currentIndex,questionsData,children) => {
            if(children === 'next') {
                dispatch(nextBtn(currentIndex+1,questionsData))
            } else {
                dispatch(prevBtn(currentIndex-1,questionsData))
            }
        }
    }
}

const PrevNextContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PrevNextBtn)

export default PrevNextContainer