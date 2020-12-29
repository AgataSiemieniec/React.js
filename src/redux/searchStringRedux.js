

// selectors
export const getSearchString = ({searchString}) => searchString;
export const countVisibleCards = ({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;

// action name creator

// const reducerName = 'searchString';

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

