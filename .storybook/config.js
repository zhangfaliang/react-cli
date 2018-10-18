import { configure, setAddon } from "@storybook/react"
import JSXAddon from "storybook-addon-jsx"
import { setOptions } from "@storybook/addon-options"

setAddon(JSXAddon)

setOptions({
  name: "海外项目C端M站·组件库",
  addonPanelInRight: true
})

function loadStories() {
  require("../src/stories")
}

configure(loadStories, module)
