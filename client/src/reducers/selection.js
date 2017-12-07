import { Map } from 'immutable'

const selection = (state = Map({ namespace: "default", kind: "", entity: null }), action) => {
  switch (action.type) {
    case 'SELECT_NAMESPACE':
      return state.set("namespace", action.namespace).set("kind", "");
    case 'SELECT_KIND':
      return state.set("kind", action.kind);
    case 'SELECT_ENTITY':
      return state.set("entity", action.entity);
    default:
      return state
  }
};

export default selection;