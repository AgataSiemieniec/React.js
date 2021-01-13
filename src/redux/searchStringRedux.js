// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards  = ({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator

// const reducerName = 'searchString';

// actions types

// action creators
// export const createAction_changeSearchString = payload => ({ payload: payload, type: CHANGE });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

