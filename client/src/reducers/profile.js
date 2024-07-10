import { createSlice } from '@reduxjs/toolkit'
export const profile = createSlice({
    name: 'profile',
    initialState: {KeysErrorPecentage_data: [{"x": "a","y":24.5}, {"x": "b","y":18.5},{"x": "c","y":34.5},
                    {"x": "d","y":18.5},{"x": "e","y":34.5}, {"x": "f","y":18.5},{"x": "g","y":34.5}, {"x": "h","y":18.5}]
        },
    reducers: {
        GET_PROFILE_SUCCESS: (state, action) => {
            var initialState = JSON.parse(initialState)
            state.KeysErrorPecentage_data = initialState.KeysErrorPecentage_data
        }
    },
  })

export const { GET_PROFILE_SUCCESS } = profile.actions

export default profile.reducer
