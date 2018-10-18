import React, { Component } from "react"
import styles from "./Header.less"
import { HeaderItem } from "./HeaderItem"
import DATE_ACTIVE from "../../assets/date-active.png"
import LEAGUE_INACTIVE from "../../assets/league-inactive.png"

export class Header extends Component {
  render() {
    return (
      <div className={styles["wrapper"]}>
        <HeaderItem logo={DATE_ACTIVE} text="Today" showCloseIcon isActive />
        <HeaderItem logo={LEAGUE_INACTIVE} text="League" />
      </div>
    )
  }
}
