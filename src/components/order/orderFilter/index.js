import React, { Component } from "react"
import classnames from "classnames"
import Panel from "./panel"
import styles from "./index.less"

class OrderFilter extends Component {
  static Panel = Panel
  state = {
    defaultActiveTab: null,
    defaultActiveKey: ["0", "0"],
    hideTab: true,
    loadingTab: false
  }
  static defaultProps = {
    defaultActiveKey: ["0", "0"],
    defaultActiveTab: "0",
    onChange: () => {}
  }

  static getDerivedStateFromProps(props, state) {
    if (state.defaultActiveTab === null) {
      return {
        defaultActiveTab: props.defaultActiveTab,
        defaultActiveKey: props.defaultActiveKey
      }
    }

    return null
  }

  renderIcon(iconStr, className) {
    return (
      <img
        className={className}
        src={require(`../../../assets/v1/${iconStr}.png`)}
        alt=""
      />
    )
  }

  render() {
    const { onChange } = this.props
    const { defaultActiveTab, hideTab, defaultActiveKey } = this.state
    const children = React.Children.toArray(this.props.children)
    const navCls = classnames({
      [styles.nav]: hideTab
    })

    const wrapCls = classnames({
      [styles.wrap]: true
    })
    return (
      <div className={wrapCls}>
        {!hideTab ? <div className={styles.mark} /> : null}
        <div className={navCls}>
          {children.map((v, k) => {
            const iconStr =
              +defaultActiveTab === k && !hideTab ? "jt_l@3x" : "jt@3x"
            const hight = iconStr === "jt_l@3x"
            const iconStrCls = classnames({
              [styles.imgUp]: hight
            })
            const tabCls = classnames({
              [styles.hight]: hight
            })
            return (
              <div className={styles.item} key={k}>
                <div className={styles.header}>
                  <span
                    className={tabCls}
                    onClick={() => {
                      if (this.state.defaultActiveTab !== k && !hideTab) {
                        this.setState({ loadingTab: true })
                        setTimeout(() => {
                          this.setState({
                            defaultActiveTab: k,
                            hideTab: false,
                            loadingTab: false
                          })
                        }, 0)
                      } else {
                        this.setState({
                          defaultActiveTab: k,
                          hideTab: !this.state.hideTab
                        })
                      }
                    }}
                  >
                    {v.props.body[defaultActiveKey[k]].name}
                    {this.renderIcon(iconStr, iconStrCls)}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        {!hideTab ? (
          <div className={styles.body}>
            {this.state.loadingTab
              ? null
              : children[defaultActiveTab].props.body.map((v, k) => {
                  const keyCls = classnames({
                    [styles.hight]:
                      +this.state.defaultActiveKey[
                        this.state.defaultActiveTab
                      ] === k
                  })
                  return (
                    <div
                      className={keyCls}
                      onClick={() => {
                        const cp = [...this.state.defaultActiveKey]
                        cp[this.state.defaultActiveTab] = k
                        this.setState({
                          defaultActiveKey: cp
                        })
                        onChange.call(this, v)
                      }}
                      key={k}
                    >
                      {v.name}
                    </div>
                  )
                })}
          </div>
        ) : null}
      </div>
    )
  }
}

export default OrderFilter
