import React, { Component } from "react"
import Card from "./card"

class LabelCard extends Component {
  static Card = Card
  static defaultProps = {
    onClick: () => {}
  }

  render() {
    const children = this.props.children.length
      ? this.props.children
      : [this.props.children]
    return (
      <div>
        {children.map((v, k) => {
          return <div key={k}>{v}</div>
        })}
      </div>
    )
  }
}

export default LabelCard
