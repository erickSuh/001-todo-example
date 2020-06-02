import { DispatchAction, rootReducer } from './reducers';
import { CardsList } from './types';
import { createStore } from 'redux';

export const store = createStore<CardsList, DispatchAction, null, null>(
  rootReducer
);
