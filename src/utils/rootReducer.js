export const ROOT_AUTH = `root/ROOT_AUTH`;

export const auth = () => ({
  type: ROOT_AUTH,
  payload: true
});
export const actions = {
  auth
};

const initalState = {
  auth: false
};

export default function rootReducer(state = initalState, action) {
  switch (action.type) {
    case 'root/AUTH':
      return state;
    default:
      return state;
  }
}
