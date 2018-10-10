import React, { Component } from "react"

class Panel extends Component {
  render() {
    return (
      <div>
        {this.props.header}
        {this.props.children}
      </div>
    )
  }
}

export default Panel
