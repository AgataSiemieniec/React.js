import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));


// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`; // służy do zmiany nazwy akcji na dłuższy identyfikator

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators adddCard
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD});


// reducer
export default function reducer(state = [], action = {}) {
  console.log(action);
  switch (action.type) { // switch działa podobnie do if ... else if ...else.
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
} 


