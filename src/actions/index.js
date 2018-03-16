import API from '../utils/Api';

export const PREVBUTTON = 'PREVBUTTON';
export const NEXTBUTTON = 'NEXTBUTTON';
export const OPTION = 'OPTION';

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

// todo 随着action越来越多需要单独分文件处理

export const prevBtn = (currentIndex,questionData) => {
    return {
        type: PREVBUTTON,
        currentIndex:currentIndex,
        questionData:questionData,
    }
}

export const nextBtn = (currentIndex,questionData) => {
    return {
        type: NEXTBUTTON,
        currentIndex:currentIndex,
        questionData:questionData,
        selectedNum: -1,
    }
}

export const option = (num) => {
    return {
        type: OPTION,
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

export const fetchPosts = (url) => {
    return function (dispatch) {
        dispatch(requestPosts(url))

        return API.fetchApiData(url)
            .then(
                json => dispatch(receiveQuestionData(json)),
                error => console.log(error)
            )
    }
}

function receiveQuestionData(result) {
    return {
        type: REQUEST_SUCCESS,
        questionData:result,
    }
}

function questionDataError() {
    return {
        type: REQUEST_FAIL,
        message:'数据请求失败',
    }
}