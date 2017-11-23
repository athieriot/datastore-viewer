export const selectNamespace = namespace => {
  return {
    type: 'SELECT_NAMESPACE',
    namespace
  }
};

export const selectKind = kind => {
  return {
    type: 'SELECT_KIND',
    kind
  }
};

export const fetchNamespace = () => {
  return {
    type: 'FETCH_NAMESPACES'
  }
};