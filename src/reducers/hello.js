export const ROOT_AUTH = `hello/AUTH`;

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

export default function Hello(state = initalState, action) {
  switch (action.type) {
    case 'hello/AUTH':
      return state;
    default:
      return state;
  }
}
