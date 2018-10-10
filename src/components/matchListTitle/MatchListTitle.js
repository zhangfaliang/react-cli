import React, { Component } from "react"
import LiveNum from "./LiveNum"
import ChoosePlay from "./ChoosePlay"
import LeftTitle from "../label/LeftTitle"
import GamePlayModule from "./GamePlayModule"
import styles from "./index.less"

class MatchListTitle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpenFlag: false,
      selectItem: this.props.chooseText
    }
  }
  handleChoose = isOpenFlag => {
    const { handleChoose } = this.props
    this.setState({
      isOpenFlag
    })
    handleChoose && handleChoose(isOpenFlag)
  }
  handleItem = item => {
    const { handleItem } = this.props
    this.setState({
      selectItem: item
    })
    handleItem && handleItem(item)
  }
  render() {
    const { prefixCls, children } = this.props
    const { isOpenFlag, selectItem } = this.state
    const childrens = React.Children.map(children, option => {
      const { isOpen, chooseText, ...other } = option.props
      if (option.type.COMPONENT_NAME === "LIVENUM") {
        return <LiveNum {...other} handleLive={this.props.handuleLive} />
      } else if (option.type.COMPONENT_NAME === "CHOOSEPLAY") {
        return (
          <ChoosePlay
            {...other}
            chooseText={selectItem}
            handleChoose={this.handleChoose}
            active={isOpenFlag}
          />
        )
      } else if (option.type.COMPONENT_NAME === "LEFTNODE") {
        return (
          <LeftTitle
            {...other}
            clickLeftTitleText={this.props.clickLeftTitleText}
          />
        )
      } else if (option.type.COMPONENT_NAME === "GAMEPLAYMODULE") {
        return (
          <GamePlayModule
            isOpen={isOpenFlag}
            {...other}
            handleItem={this.handleItem}
            handleLayer={this.handleChoose}
          />
        )
      }
    })
    const clsName = `${prefixCls || "default"}-match-list-title`
    return <div className={styles[clsName]}>{childrens}</div>
  }
}
MatchListTitle.defaultProps = {
  prefixCls: "default",
  chooseText: "Reault 1x2",
  handleLive: () => {
    console.log("handuleLive --title ")
  },
  handleChoose: () => {
    console.log("handuleChoose --title ")
  },
  clickLeftTitleText: () => {
    console.log("clickLeftTitleText --title ")
  },
  handleItem: item => {
    console.log(item + "handleItem --title ")
  }
}
export default MatchListTitle
