import React, { Component } from "react"
import IconFont from "../iconFont"
import styles from "./index.less"
class BetInfo extends Component {
  static COMPONENT_NAME = "BETINFO"

  render() {
    const {
      prefixCls,
      optionName,
      gamePlay,
      gameAgainst,
      handleDelete
    } = this.props
    const clsName = styles[`${prefixCls}-betinfor`]
    return (
      <div
        className={clsName}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <div className={styles.left}>
          <div className={styles.optionName}>{optionName}</div>
          <div className={styles.gamePlayName}>{gamePlay}</div>
          <div className={styles.gameAgainst}>{gameAgainst}</div>
        </div>
        <div className={styles.right} onClick={handleDelete}>
          <IconFont type="delete" />
        </div>
      </div>
    )
  }
}
BetInfo.defaultProps = {
  prefixCls: "default",
  optionName: "Royal Pari FC",
  gamePlay: "Result 1X2",
  gameAgainst: "Royal Pari FC  VS  Nacional Potosi",
  handleDelete: () => {
    console.log("handleDelete")
  }
}
export default BetInfo
