import React, { Component } from "react"
import classnames from "classnames"
import Button from "../button"
import styles from "./index.less"
import { INSUFFICIENT_BALANCE } from "@/assets/insufficient-balance.png"

class BetInput extends Component {
  static COMPONENT_NAME = "BETINPUT"
  constructor(props) {
    super(props)
  }

  handleAllin = ({ activeFlag }) => {
    const { handleAllin } = this.props
    handleAllin(activeFlag)
  }
  handleFillin = ({ activeFlag }) => {
    const { handleFillin } = this.props
    handleFillin(activeFlag)
  }
  handleBet = ({ activeFlag }) => {
    // const { handleBet } = this.props;
    // handleBet(activeFlag);
  }
  handleFocusInput = e => {
    e.stopPropagation()
    const { focusInput } = this.props
    focusInput()
  }

  render() {
    const {
      perfixCls,
      betAmount,
      amountSuffix,
      possibleWin,
      betDisabled,
      focusInput,
      allAmount,
      fillAmount,
      allInDisabled,
      fillInDisabled,
      isAllInActive,
      isFillInActive,
      isBetBtnActive
    } = this.props
    const clsName = styles[`${perfixCls}-input`]
    const amountCls = classnames({
      [styles.betAmount]: true,
      [styles.amountDisabled]: betAmount == 0
    })

    return (
      <div
        className={clsName}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <div className={styles.inputWrap} onClick={this.handleFocusInput}>
          <div className={styles.input}>
            <span className={amountCls}>{betAmount}</span>
            <span className={styles.amountSuffix}>{amountSuffix}</span>
          </div>
          <div className={styles.possibleWinWrap}>
            <span>Possible win</span>
            <span>
              {possibleWin}
              {` ${amountSuffix}`}
            </span>
          </div>
        </div>
        {allAmount > fillAmount && (
          <div
            onClick={e => {
              e.stopPropagation()
            }}
          >
            <Button
              active={isFillInActive}
              disabled={fillInDisabled}
              type="Fill-in"
              clickCheckBtn={this.handleFillin}
              btnText="Fill-in"
              prefixCls="all-in"
            />
          </div>
        )}
        {allAmount <= fillAmount && (
          <Button
            active={isFillInActive}
            disabled={allInDisabled}
            type="All-in"
            clickCheckBtn={this.handleAllin}
            btnText="All-in"
            prefixCls="all-in"
          />
        )}

        <Button
          active={isBetBtnActive}
          disabled={betDisabled}
          type="Bet"
          clickCheckBtn={this.handleBet}
          btnText="Bet"
          prefixCls="bet"
        />
      </div>
    )
  }
}
BetInput.defaultProps = {
  perfixCls: "default",
  betAmount: "0",
  amountSuffix: "EUR",
  possibleWin: "345,678",
  allAmount: "0",
  fillAmount: "0",
  betDisabled: false,
  fillInDisabled: false,
  allInDisabled: false,
  btnActive: false,
  isFillInActive: false,
  isAllInActive: false,
  isBetBtnActive: false,

  handleAllin: () => {
    console.log("handleAllin---")
  },
  handleFillin: () => {
    console.log("handleFillin---")
  },

  handleBet: betInfo => {
    console.log("handleBet---", betInfo)
  },
  focusInput: () => {
    console.log("focusInput---")
  },
  handleInputChange: value => {
    console.log("handleInputChange---", value)
  }
}
export default BetInput
