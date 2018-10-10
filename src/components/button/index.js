import React, { Component } from "react"
import classnames from "classnames"
import styles from "./index.less"
class Button extends Component {
  static COMPONENT_NAME = "BUTTON"
  constructor(props) {
    super(props)
    this.state = {
      activeFlag: this.props.defaultActive
    }
  }
  getSnapshotBeforeUpdate = (prevProp, prevState, snapshot) => {
    if (prevProp.active !== this.props.active) {
      this.setState(() => {
        return {
          activeFlag: this.props.active
        }
      })
    }
    return true
  }
  componentDidUpdate = (prevProp, prevState, snapshot) => {
    return snapshot
  }

  handleClick = e => {
    e.preventDefault()
    const { clickCheckBtn, type } = this.props
    this.setState(
      () => ({ activeFlag: !this.state.activeFlag }),
      () => {
        clickCheckBtn && clickCheckBtn(type)
      }
    )
  }
  render() {
    const { prefixCls, btnText } = this.props
    const btnClsName = classnames({
      [styles[`${prefixCls || "default"}-button`]]: true,
      [styles["active"]]: this.state.activeFlag
    })

    return (
      <span className={btnClsName} onClick={this.handleClick}>
        {btnText}
      </span>
    )
  }
}
Button.defaultProps = {
  prefixCls: "check-all",
  defaultActive: false,
  active: false,
  clickCheckBtn: () => {
    console.log("clickCheckBtn")
  },
  btnText: `Check all In-Play`
}
export default Button
