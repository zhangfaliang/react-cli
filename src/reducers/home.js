import { createReducer } from '../utils/reducerUtils';
export const key = 'home';
export const ROOT_AUTH = `${key}/AUTH`;

export const auth = () => ({
  type: ROOT_AUTH,
  payload: true
});
export const actions = {
  auth
};

const ACTION_HANLDERS = {
  [ROOT_AUTH]: (state, action) => ({
    ...state,
    auth: action.payload
  })
};

const initalState = {
  auth: false
};

export default createReducer(initalState, ACTION_HANLDERS);
