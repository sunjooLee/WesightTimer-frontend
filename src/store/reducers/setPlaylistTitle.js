import {combineReducers} from 'redux';
import * as types from "../actions/ActionTypes";

//초기 상태 작성 (상수 형태로 작성)
//Root reducer를 export해준다
const initialState = {
    playedSong: []
}

const setPlaylistTitle = (state=initialState, action) => {
    switch(action.type){
        case types.SET_PLAYLIST_TITLE: return {...state, playedSong: action.payload.playedSong};
        default: return state;
    }
};

export default combineReducers({setPlaylistTitle});