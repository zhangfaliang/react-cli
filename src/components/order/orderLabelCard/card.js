import React, { Component } from "react"
import styles from "./card.less"

class Card extends Component {
  render() {
    const { label, children, onClick } = this.props
    return (
      <div className={styles.wrap}>
        <div className={styles.label}>{label}</div>
        {children.map((v, k) => {
          return (
            <div onClick={onClick} key={k} className={styles.body}>
              {v}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Card
