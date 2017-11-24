// import fetch from 'cross-fetch'

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

// export function fetchPosts(subreddit) {
//
//   return function (dispatch) {
//     // dispatch(requestPosts(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//       .then(
//         response => response.json(),
//         // Do not use catch, because that will also catch
//         // any errors in the dispatch and resulting render,
//         // causing a loop of 'Unexpected batch number' errors.
//         // https://github.com/facebook/react/issues/6895
//         error => console.log('An error occurred.', error)
//       )
//       .then(json =>
//         dispatch(receivePosts(subreddit, json))
//       )
//   }
// };