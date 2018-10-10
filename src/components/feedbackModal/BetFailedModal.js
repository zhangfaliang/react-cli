import React from "react"
import { FeedbackModal } from "."
import BET_FAILED from "@/assets/bet-failed.png"

export class BetFailedModal extends React.PureComponent {
  state = { modalIsOpen: false }

  openOrCloseModal = () =>
    this.setState(preState => ({ modalIsOpen: !preState.modalIsOpen }))

  render() {
    return (
      <div>
        <button onClick={this.openOrCloseModal}>Open Modal</button>
        <FeedbackModal
          showCloseIcon
          onClick={this.openOrCloseModal}
          logo={BET_FAILED}
          texts={["Opps, Your order is rejected."]}
          footerText="Try again"
          isOpen={this.state.modalIsOpen}
          closeModal={this.openOrCloseModal}
        />
      </div>
    )
  }
}
