import React from "react"
import { FeedbackModal } from "."
import SUCCESSFULLY_ORDERED from "@/assets/successfully-ordered.png"

export class SuccessfullyOrderedModal extends React.PureComponent {
  state = { modalIsOpen: false }

  openOrCloseModal = () =>
    this.setState(preState => ({ modalIsOpen: !preState.modalIsOpen }))

  render() {
    return (
      <div>
        <button onClick={this.openOrCloseModal}>Open Modal</button>
        <FeedbackModal
          onClick={this.openOrCloseModal}
          logo={SUCCESSFULLY_ORDERED}
          texts={["Your order is confirmed!"]}
          footerText="OK"
          isOpen={this.state.modalIsOpen}
          closeModal={this.openOrCloseModal}
        />
      </div>
    )
  }
}
