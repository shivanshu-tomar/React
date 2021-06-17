import loginReducer from "redux/reducers/loginReducer";
import signupReducer from "redux/reducers/signupReducer";
import dashboardReducer from "redux/reducers/dashboardReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "saga/sagas";
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer,
  signup: signupReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga);
export default store;
