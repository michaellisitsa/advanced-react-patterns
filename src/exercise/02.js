// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 🐨 replace this with a call to React.Children.map and map each child in
  // props.children to a clone of that child with the props they need using
  // React.cloneElement.
  return React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      on,
      onClick: toggle,
    }),
  )
  // You can destructure children and map over that, see why here:
  // 📜 https://reactjs.org/docs/react-api.html#reactchildren
  // 📜 https://reactjs.org/docs/react-api.html#cloneelement
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({on, children}) => {
  if (on) {
    return React.Children.map(children, child => <p>{child}</p>)
  }
  return null
}

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({on, children}) => {
  if (!on) {
    return React.Children.map(children, child => <p>{child}</p>)
  }
  return null
}

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({on, onClick}) => {
  return <Switch on={on} onClick={onClick} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>This is on</ToggleOn>
        <ToggleOff>This is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
