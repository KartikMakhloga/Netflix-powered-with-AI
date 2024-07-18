import {createSlice} from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        addNowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            // action.payload is the movies array from the API response
            state.addNowPlayingMovies = action.payload;
        }
    }
});


export const {addNowPlayingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;