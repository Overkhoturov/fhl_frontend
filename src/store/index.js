import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import combinedReducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combinedReducers(),
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
