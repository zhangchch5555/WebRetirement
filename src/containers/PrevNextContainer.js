import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { prevBtn,nextBtn } from '../actions/index'
import PrevNextBtn from '../components/PrevNextBtn'

const mapStateToProps = (state,ownProps) => {
    return {
        currentIndex: state.currentIndex || ownProps.currentIndex,
        questionData:state.questionData || ownProps.questionData,
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