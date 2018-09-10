import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions/grandChildAction';
const GrandChild = props => {
  console.log(props);

  return (
    <div>
      <h3>Grand Child</h3>
      <div
        onClick={() => {
          props.loadData();
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
    loadData: () => dispatch(loadData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrandChild);
