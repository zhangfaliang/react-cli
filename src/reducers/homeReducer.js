const initState = {
  home: 'home'
};

function homeReducer(state = initState, action) {
  switch (action.type) {
    case 'TEST':
    default:
      return state;
  }
}

export default homeReducer;
