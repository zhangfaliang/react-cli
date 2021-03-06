import React, { Component } from "react"
import classnames from "classnames"
import styles from "./index.less"
import { spawn } from "redux-saga/effects"
class Button extends Component {
  static COMPONENT_NAME = "BUTTON"
  constructor(props) {
    super(props)
    this.state = {
      activeFlag: props.defaultActive
    }
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.active !== this.props.active) {
      this.setState({
        activeFlag: nextProps.active
      })
    }
    return true
  }

  handleClick = e => {
    e.stopPropagation()
    const { clickCheckBtn, type, disabled } = this.props
    if (disabled) return
    this.setState(
      () => ({ activeFlag: !this.state.activeFlag }),
      () => {
        clickCheckBtn &&
          clickCheckBtn({ activeFlag: this.state.activeFlag, type: type })
      }
    )
  }
  render() {
    const { prefixCls, btnText, disabled, active, maxStake } = this.props
    const btnClsName = classnames({
      [styles[`${prefixCls || "default"}-button`]]: true,
      [styles["active"]]: this.state.activeFlag,
      [styles["disabled"]]: disabled
    })

    return (
      <a href="javascript:;" className={btnClsName} onClick={this.handleClick}>
        {btnText}
        {maxStake && <span className={styles.maxStakeAll}>{maxStake}</span>}
      </a>
    )
  }
}
Button.defaultProps = {
  prefixCls: "check-all",
  defaultActive: false,
  active: false,
  clickCheckBtn: () => "click",
  btnText: `Check all In-Play`,
  disabled: false,
  maxStake: ""
}
export default Button
