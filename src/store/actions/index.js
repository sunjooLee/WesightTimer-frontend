import * as types from "./ActionTypes";

export const setPlaylistTitle = (playedSong) => {
    return {
        type: types.SET_PLAYLIST_TITLE,
        payload: {playedSong}
    }
}