import React from "react"
import styles from "./index.less"
import IconFont from "../iconFont"
import { spawn } from "redux-saga/effects"

//TODO 需要添加fonticon 组件 现在等待fonticon添加
const RightTable = ({
  prefixCls = "default",
  arrayText = [],
  showIcon = false,
  iconType = "",
  rightText = ""
}) => {
  const clsNameStr = `${prefixCls || "default"}-right-table`
  return (
    <div className={styles[clsNameStr]}>
      {rightText && <span className={styles.rightText}>{rightText}</span>}
      {showIcon && (
        <div className={styles.icon}>
          <IconFont type={iconType} />
        </div>
      )}
      {arrayText &&
        arrayText.map(text => {
          return (
            <span key={text} className={styles.table}>
              {text}
            </span>
          )
        })}
    </div>
  )
}
RightTable.COMPONENT_NAME = "RIGHTTABLE"
export default RightTable
