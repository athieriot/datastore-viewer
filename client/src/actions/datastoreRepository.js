import { Map } from 'immutable'

const repository = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_NAMESPACES':
      return state;
    default:
      return state
  }
};

export default repository;