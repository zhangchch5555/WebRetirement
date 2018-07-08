import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrevNextContainer from './PrevNextContainer'
import QuestionsContainer from './QuestionsContainer'
import PropTypes from 'prop-types'
import store from '../store/store';
import API from '../utils/Api';
import { fetchPosts } from '../actions/index'

export class App extends Component {
    constructor(props) {
        super(props)
    }

    //get api data after mount
    componentDidMount() {
        const url = 'https://private-b4dc1-zhang2.apiary-mock.com/questions';

        //API.fetchApiData(url)
        //    .then((result)=> {
        //        questionsData = result;
        //        questionsSum = questionsData.length;
        //        this.setCurrentData(this.state.currentIndex);
        //    },(e) => {
        //    // error
        //})

        // todo 此处需要整理思路
        store.dispatch(fetchPosts(url));
    }

    render(){
        return (
            <div>
                <QuestionsContainer />
                <PrevNextContainer />
            </div>
        )
    }
}

App.contextTypes = { store: PropTypes.object.isRequired }
