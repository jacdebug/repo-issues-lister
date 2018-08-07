// Boilerplate for store config
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import appReducer from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(
  combineReducers({
    app: appReducer
  }),
  enhancer
);

sagaMiddleware.run(sagas);
export default store;
