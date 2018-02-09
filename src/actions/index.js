import API from '../utils/Api';

export const PREV = 'PREV';
export const NEXT = 'NEXT';
export const SELECT = 'SELECT';

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

// todo 随着action越来越多需要单独分文件处理

export const prevBtn = (currentIndex,questionData) => {
    return {
        type: PREV,
        currentIndex:currentIndex,
        questionData:questionData,
    }
}

export const nextBtn = (currentIndex,questionData) => {
    return {
        type: NEXT,
        currentIndex:currentIndex,
        questionData:questionData,
    }
}

export const optionClick = (num) => {
    return {
        type: SELECT,
        clickFlag: true,
        selectedNum: num,
    }
}

function requestPosts(url) {
    return {
        type: REQUEST_START,
        url,
    }
}

export function fetchPosts(url) {
    return function (dispatch) {
        dispatch(requestPosts(url))

        return API.fetchApiData(url)
            .then(
                json => dispatch(receiveQuestionsData(json)),
                error => console.log(error)
            )
    }
}

function receiveQuestionsData(result) {
    return {
        type: REQUEST_SUCCESS,
        questionsData:result,
    }
}

function questionDataError() {
    return {
        type: REQUEST_FAIL,
        message:'数据请求失败',
    }
}