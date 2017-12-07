import fetch from 'cross-fetch'
import { push } from 'react-router-redux'

export const selectNamespace = namespace => {
  return (dispatch, getState) => {
    if (namespace) {
      dispatch(push('/namespaces/' + namespace));
      dispatch(fetchKinds(namespace));
      dispatch({
        type: 'SELECT_NAMESPACE',
        namespace
      });
    }
  };
};

export const selectKind = kind => {
  return (dispatch, getState) => {
    if (kind && kind !== "") {
      dispatch(push("/namespaces/" + getState().selection.get('namespace') + "/kinds/" + kind));
      dispatch(fetchEntities(getState().selection.get('namespace'), kind));
      dispatch({
        type: 'SELECT_KIND',
        kind
      });
    }
  };
};

export const receivedNamespaces = (namespaces) => {
  return (dispatch) => {
    dispatch({
      type: 'RECEIVED_NAMESPACES',
      namespaces
    });
  };
};

export const receivedKinds = (kinds) => {
  return (dispatch, getState) => {
    //TODO: Is this the right place for such an action?
    if (kinds.length > 0 && !getState().selection.get("kind")) {
      dispatch(selectKind(kinds[0]))
    }
    dispatch({
      type: 'RECEIVED_KINDS',
      kinds
    })
  };
};

export const fetchingEntities = () => {
  return {
    type: 'FETCHING_ENTITIES'
  }
};

export const receivedEntities = (entities) => {
  return {
    type: 'RECEIVED_ENTITIES',
    entities
  }
};

export const selectEntity = (entity) => {
  return {
    type: 'SELECT_ENTITY',
    entity
  }
};

export function fetchNamespaces() {

  return (dispatch) => {
    return fetch('/api/namespaces')
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        return dispatch(receivedNamespaces(json))
      })
  }
}

export function fetchKinds(namespace) {

  return (dispatch, getState) => {
    return fetch('/api/namespaces/' + namespace + "/kinds")
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        return dispatch(receivedKinds(json));
      })
  }
}

export function fetchEntities(namespace, kind) {

  return function (dispatch) {
    dispatch(fetchingEntities());

    return fetch('/api/namespaces/' + namespace + "/kinds/" + kind)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        dispatch(receivedEntities(json));
      })
  }
}