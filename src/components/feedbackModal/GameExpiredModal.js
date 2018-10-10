import React from "react"
import { FeedbackModal } from "."
import GAME_EXPIRED from "@/assets/game-expired.png"

export class GameExpiredModal extends React.PureComponent {
  state = { modalIsOpen: false }

  openOrCloseModal = () =>
    this.setState(preState => ({ modalIsOpen: !preState.modalIsOpen }))

  render() {
    return (
      <div>
        <button onClick={this.openOrCloseModal}>Open Modal</button>
        <FeedbackModal
          onClick={this.openOrCloseModal}
          logo={GAME_EXPIRED}
          texts={["There are no games for the moment."]}
          footerText="OK"
          isOpen={this.state.modalIsOpen}
          closeModal={this.openOrCloseModal}
        />
      </div>
    )
  }
}
