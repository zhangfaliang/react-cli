export const grandChildActionType = {
  GRAND_CHILD_LOAD_DATA: 'GRAND_CHILD_LOAD_DATA',
  GRAND_CHILD_LOAD_DATA_SUCCESS: 'GRAND_CHILD_LOAD_DATA_SUCCESS',
  GRAND_CHILD_LOAD_DATA_ERROR: 'GRAND_CHILD_LOAD_DATA_ERROR'
};

export const loadData = () => {
  return {
    type: grandChildActionType.GRAND_CHILD_LOAD_DATA
  };
};

export const loadDataSucess = data => {
  return {
    type: grandChildActionType.GRAND_CHILD_LOAD_DATA_SUCCESS,
    data
  };
};

export const loadDataErr = err => {
  return {
    type: grandChildActionType.GRAND_CHILD_LOAD_DATA_ERROR,
    err
  };
};
