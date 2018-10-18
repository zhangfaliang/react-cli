import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./layout/index"

storiesOf("My App/Buttons/Simple", module).add("with text", () => (
  <Button>Hello Button</Button>
))

// storiesOf('My App/Buttons/Emoji', module)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
//   ));
