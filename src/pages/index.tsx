import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import MenuPrimary from "../components/menu-primary"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <MenuPrimary />
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}