import { Map } from 'immutable'

const selection = (state = Map({ namespace: "default" }), action) => {
  switch (action.type) {
    case 'SELECT_NAMESPACE':
      return state.set("namespace", action.namespace);
    case 'SELECT_KIND':
      return state.set("kind", action.kind);
    default:
      return state
  }
};

export default selection;