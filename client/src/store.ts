import { configureStore } from "@reduxjs/toolkit";

import courses from './reducers/courses'
import session from './reducers/session'
import exercise from './reducers/exercise'
import alert from './reducers/alert'
import statistics from './reducers/statistics'
import profile from './reducers/profile'

/*if (process.env.NODE_ENV === 'production') {
  middleware.push(createLogger());
}*/

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
 ));*/


export const store = configureStore({
  reducer:{ 
    alert: alert,
    session:session,
    profile:profile,
    courses:courses,
    exercise:exercise,
    statistics:statistics,
  }    
});
