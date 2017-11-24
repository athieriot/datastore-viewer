// import fetch from 'cross-fetch'

export const selectNamespace = namespace => {
  return (dispatch, getState) => {
    dispatch(fetchKinds(namespace));

    return {
      type: 'SELECT_NAMESPACE',
      namespace
    }
  };
};

export const selectKind = kind => {
  return {
    type: 'SELECT_KIND',
    kind
  }
};

export const receivedNamespaces = (namespaces) => {
  return {
    type: 'RECEIVED_NAMESPACES',
    namespaces
  }
};

export const receivedKinds = (kinds) => {
  return {
    type: 'RECEIVED_KINDS',
    kinds
  }
};

export function fetchNamespaces() {

  return function (dispatch) {
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
};

export function fetchKinds(namespace) {

  return function (dispatch) {
    return fetch('/api/namespaces/' + namespace + "/kinds")
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        dispatch(receivedKinds(json));
        return dispatch(selectKind(json[0] ? json[0] : ""))
      })
  }
};