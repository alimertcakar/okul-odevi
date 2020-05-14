import { createSlice } from '@reduxjs/toolkit'
const slice = createSlice({
    name: 'updateLog',
    initialState: { log: "Önce çalıştırın" },
    reducers: {
        updateLog: (state, action) => { return state = { log: action.payload } }
    },
});
export default slice;