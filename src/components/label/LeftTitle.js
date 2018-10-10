import React, { Component } from "react"
import classnames from "classnames"
import styles from "./index.less"
import IconFont from "../iconFont"
import { DEFAULT_ENCODING } from "crypto"
//TODO 需要添加fonticon 组件 现在等待fonticon添加
class leftTitle extends Component {
  static COMPONENT_NAME = "LEFTNODE"
  handeClickTitleText = e => {
    e.preventDefault()
    const { leftText, clickLeftTitleText, type } = this.props
    clickLeftTitleText && clickLeftTitleText({ type, leftText })
  }

  render() {
    const {
      leftText,
      gameType,
      prefixCls,
      clickTitle,
      gameTypeImgUrl
    } = this.props
    const clsNameStr = `${prefixCls || "default"}-left-title`

    return (
      <div onClick={this.handeClickTitleText} className={styles[clsNameStr]}>
        {gameTypeImgUrl && (
          <img className={styles.gameTypeImg} src={gameTypeImgUrl} alt="" />
        )}
        <span className={styles.titleText}>{leftText}</span>
      </div>
    )
  }
}
leftTitle.defaultProps = {
  prefixCls: "default",
  clickLeftTitleText: params => {
    console.log(params)
  },
  leftText: "",
  gameTypeImgUrl: "https://avatars3.githubusercontent.com/u/17559536?s=40&v=4"
}

export default leftTitle
