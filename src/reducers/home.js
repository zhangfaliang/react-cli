export const ROOT_AUTH = `home/AUTH`;

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
export default function home(state = initalState, action) {
  switch (action.type) {
    case 'home/AUTH':
      return state;
    default:
      return state;
  }
}
