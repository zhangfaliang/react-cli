import React from "react"
import { FeedbackModal } from "."
import INSUFFICIENT_BALANCE from "@/assets/insufficient-balance.png"

export class InsufficientBalanceModal extends React.PureComponent {
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
          logo={INSUFFICIENT_BALANCE}
          texts={["Insufficient balance,", "Please recharge first!"]}
          footerText="Deposit"
          isOpen={this.state.modalIsOpen}
          closeModal={this.openOrCloseModal}
        />
      </div>
    )
  }
}
