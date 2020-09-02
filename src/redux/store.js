import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import { watchFetching } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetching);
