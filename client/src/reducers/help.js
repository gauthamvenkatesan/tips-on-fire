import { createSlice } from '@reduxjs/toolkit'

export const help = createSlice({
    name: 'help',
    initialState: { helpText:" Help Text Init"},
    reducers: {
        INIT: (state, action) => {
            console.log('INIT help reducer')
            state.helpText = "LOADED HELP"
        },
    },
  })

export const { INIT } = help.actions

export default help.reducer
