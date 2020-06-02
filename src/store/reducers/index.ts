import { Action, Reducer, Dispatch } from 'redux';
import { CardsList } from '~/store/types';

export const initialState: CardsList = {
  data: [],
};

export interface DispatchAction extends Action<ActionType> {
  payload: Partial<CardsList>;
}

export enum ActionType {
  FetchCards,
}

export const rootReducer: Reducer<CardsList, DispatchAction> = (
  state = initialState,
  action
) => {
  if (action.type === ActionType.FetchCards) {
    return { ...state, name: action.payload.data || '' };
  } else return state;
};

export class RootDispatcher {
  private readonly dispatch: Dispatch<DispatchAction>;

  constructor(dispatch: Dispatch<DispatchAction>) {
    this.dispatch = dispatch;
  }
  fetchCards = (data: CardsList) =>
    this.dispatch({ type: ActionType.FetchCards, payload: data });
}
