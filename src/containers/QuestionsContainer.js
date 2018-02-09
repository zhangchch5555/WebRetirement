import { connect } from 'react-redux'
import { optionClick } from '../actions/index'
import Questions from '../components/Questions'

const mapStateToProps = (state,ownProps) => {
    let questionData = [];
    if(state.prevNextBtn.questionData.length === 0) {
        questionData = ownProps.questionData
    } else {
        questionData = state.prevNextBtn.questionData
    }
    console.log(state);
    return {
        selectedNum: state.optionClick.selectedNum,
        questionData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        optionClick: (num) => {
            dispatch(optionClick(num))
        }
    }
}

const QuestionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions)

export default QuestionsContainer