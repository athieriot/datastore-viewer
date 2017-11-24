import { Map } from 'immutable'

const repository = (state = Map({ namespaces: [], kinds: [] }), action) => {
  switch (action.type) {
    case 'RECEIVED_NAMESPACES':
      return state.set('namespaces', action.namespaces);
    case 'RECEIVED_KINDS':
      return state.set('kinds', action.kinds);
    default:
      return state
  }
};

export default repository;