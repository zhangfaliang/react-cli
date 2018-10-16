import React from "react"
import styles from "./index.less"

export function Category() {
  const dataSets = [
    {
      logo:
        "https://www.leangoo.com/kanban/application/views/images/leangoo_logo.png",
      count: 12,
      text: "Favorite"
    },
    {
      logo:
        "https://www.leangoo.com/kanban/application/views/images/leangoo_logo.png",
      count: 79,
      text: "Soccer"
    },
    {
      logo:
        "https://www.leangoo.com/kanban/application/views/images/leangoo_logo.png",
      count: 9,
      text: "Basketball"
    },
    {
      logo:
        "https://www.leangoo.com/kanban/application/views/images/leangoo_logo.png",
      count: 2,
      text: "E-Sport"
    },
    {
      logo:
        "https://www.leangoo.com/kanban/application/views/images/leangoo_logo.png",
      count: 4,
      text: "Favorite"
    }
  ]

  return (
    <div className={styles["container-wrapper"]}>
      <div className={styles["container"]}>
        {dataSets.map(({ logo, count, text }, index) => (
          <div className={styles["box"]} key={`${text}-${index}`}>
            <div className={styles["count"]}>{count}</div>
            <img src={logo} />
            <div>{text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
