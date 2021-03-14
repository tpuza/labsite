import React from "react"
import Header from "../components/header"
import MenuPrimary from "../components/menu-primary"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <MenuPrimary />
      <Header headerText="Hello Gatsby!" />
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
    </div>
  )
}