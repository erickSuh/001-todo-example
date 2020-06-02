import { Dispatch } from 'redux';
import { CardsList } from '~/store/types';
import { CARDS_NAME } from '~/utils/status';
import { RootDispatcher } from '~/store/reducers/index';

export const actionTypeFetchCards = (data: CardsList) => ({
  type: 'FETCH_CARDS',
  data,
});

export const actionFetchCards = () => (dispatch: Dispatch) => {
  try {
    const rootDispatcher = new RootDispatcher(dispatch);
    const local = localStorage.getItem(CARDS_NAME);
    if (local) {
      const objLocal = JSON.parse(local);
      if (objLocal.data) {
        rootDispatcher.fetchCards(objLocal.data);
      }
    }
  } catch (err) {
    console.log(`Error - ${err.message}`);
  }
};
