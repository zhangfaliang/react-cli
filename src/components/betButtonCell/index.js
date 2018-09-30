import React, { Component } from "react"
import BetButton from "../betButton"
import Line from "../line"
import styles from "./index.less"
class BetButtonCell extends Component {
  static COMPONENT_NAME = "BETBUTTONCELL"
  render() {
    const { children, perfixCls } = this.props
    const classNameStr = `${perfixCls || "push"}-betButtonCell`
    const childrens = React.Children.map(children, option => {
      const { clickBetBtn, changeSp, changeHandicap, ...other } = option.props
      if (option.type.COMPONENT_NAME === "BETBUTTON") {
        return (
          <BetButton
            {...other}
            clickBetBtn={this.props.clickBetBtn}
            changeSp={this.props.changeSp}
            changeHandicap={this.props.changeHandicap}
          />
        )
      } else if (option.type.COMPONENT_NAME === "LINE") {
        return <Line {...other} />
      }
      return null
    })
    return <div className={styles[classNameStr]}>{childrens}</div>
  }
}
BetButtonCell.defaultProps = {
  clickBetBtn: params => {
    console.log(params)
  },
  changeSp: () => {
    console.log("changeSp")
  },
  changeHandicap: () => {
    console.log("changeHandicap")
  }
}
export default BetButtonCell
