import { grandChildActionType } from '../actions/grandChildAction';
const initState = {
  loading: false,
  err: '',
  data: ''
};

function grandChildReducer(state = initState, action) {
  switch (action.type) {
    case grandChildActionType.GRAND_CHILD_LOAD_DATA:
      return {
        ...state,
        loading: true
      };
    case grandChildActionType.GRAND_CHILD_LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };

    case grandChildActionType.GRAND_CHILD_LOAD_DATA_Error:
      return {
        ...state,
        err: action.err,
        loading: false
      };

    default:
      return state;
  }
}

export default grandChildReducer;
