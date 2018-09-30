import React, { Component } from "react"
import classnames from "classnames"
import styles from "./index.less"
class BetButton extends Component {
  static COMPONENT_NAME = "BETBUTTON"
  constructor(props) {
    super(props)
    this.upNode = React.createRef()
    this.downNode = React.createRef()
    this.state = {
      activeFlag: props.active || false
    }
  }

  delay = (callBack, timeout) => {
    setTimeout(callBack, timeout)
  }

  flickerSp = ({ node, newClassName, oldClassName }) => {
    node.className = newClassName
  }

  getSnapshotBeforeUpdate = (prevProp, prevState, snapshot) => {
    const { changeSp, changeHandicap } = this.props
    const { up, down, flickerSp } = styles

    this.downNode.current.className = up
    this.upNode.current.className = down
    if (prevProp.sp !== this.props.sp) changeSp()
    if (prevProp.handicap !== this.props.handicap) changeHandicap()
    if (prevProp.active !== this.props.active) {
      this.setState(() => {
        return {
          activeFlag: this.props.activ
        }
      })
    }
    if (this.props.sp > prevProp.sp) {
      this.flickerSp({
        node: this.upNode.current,
        newClassName: `${up} ${flickerSp}`,
        oldClassName: up
      })
    } else if (this.props.sp < prevProp.sp) {
      // 下降
      this.flickerSp({
        node: this.downNode.current,
        newClassName: `${down} ${flickerSp}`,
        oldClassName: down
      })
    }

    return true
  }

  componentDidUpdate = (prevProp, prevState, snapshot) => {
    return snapshot
  }

  handleBetBtn = event => {
    event.preventDefault()
    const { clickBetBtn, letNum, handicap, sp, optionId, disabled } = this.props
    this.setState(
      () => {
        return {
          activeFlag: !this.state.activeFlag
        }
      },
      () => {
        this.state.activeFlag &&
          !disabled &&
          clickBetBtn &&
          clickBetBtn({ optionId, sp, handicap, letNum })
      }
    )
  }

  render() {
    const { letNum, sp, prefixCls, disabled, active, optionName } = this.props
    const betBtnClsStr = `${prefixCls || "default"}-bet-button`
    const betBtnCls = classnames({
      [styles[betBtnClsStr]]: true,
      [styles["disabled"]]: disabled,
      [styles["active"]]: this.state.activeFlag
    })

    return (
      <div className={betBtnCls} onClick={this.handleBetBtn}>
        <span ref={this.upNode} className={styles.up} />
        <span ref={this.downNode} className={styles.down} />
        {optionName && (
          <div className={styles.wrapOptionName}>
            <span className={styles.optionName}>{optionName}</span>
          </div>
        )}
        <div className={styles.wrapSp}>
          {disabled ? (
            <span className={styles.lock} />
          ) : (
            <span className={styles.sp}>{sp}</span>
          )}
        </div>
      </div>
    )
  }
}
BetButton.defaultProps = {
  prefixCls: "default", // css 前缀  目前 default detail medium small large
  disabled: false,
  optionId: "sdf",
  active: "",
  handicap: "4.5",
  sp: 1.2,
  optionName: "4.5",
  clickBetBtn: params => {
    console.log(params)
  },
  changeSp: () => {
    console.log("changeSp")
  },
  changeHandicap: () => {
    console.log("changeHandicap")
  },
  timeout: 1000,
  stopTime: 5000
}
export default BetButton
