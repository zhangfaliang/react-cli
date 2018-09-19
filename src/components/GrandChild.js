import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions/grandChildAction';
import { useSagaAndUseConnectedReactRouter } from '../actions/homeAction';
const GrandChild = props => {
  console.log(props);

  return (
    <div>
      <h3>Grand Child</h3>
      <div
        onClick={() => {
          props.loadData();
          props.useSagaAndUseConnectedReactRouter();
        }}
      >
        {props.someProp}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadData()),
    useSagaAndUseConnectedReactRouter: () =>
      dispatch(useSagaAndUseConnectedReactRouter())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrandChild);
