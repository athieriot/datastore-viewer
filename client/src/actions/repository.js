import { Map } from 'immutable'

const repository = (state = Map({ namespaces: [], kinds: [], loading: false, entities: [] }), action) => {
  switch (action.type) {
    case 'RECEIVED_NAMESPACES':
      return state.set('namespaces', action.namespaces);
    case 'RECEIVED_KINDS':
      return state.set('kinds', action.kinds);
    case 'FETCHING_ENTITIES':
      return state.set('loading', true);
    case 'RECEIVED_ENTITIES':
      return state.set('loading', false).set('entities', action.entities);
    default:
      return state
  }
};

export default repository;