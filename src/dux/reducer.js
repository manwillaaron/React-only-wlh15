import axios from 'axios';

const initialState = {
  posts: [],
  loading: false,
  error: false
};

const GET_POSTS = 'GET_POSTS';

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS + '_PENDING':
      return { ...state, loading: true, error: false };
    case GET_POSTS + '_FULFILLED':
      return { ...state, posts: payload, loading: false, error: false };
    case GET_POSTS + '_REJECTED':
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}



export const getPosts = () => {
  const data = axios.get('/api/posts').then(res=> res.data);
  return {
    type: GET_POSTS,
    payload: data
  };
};
