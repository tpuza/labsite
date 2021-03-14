import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import MenuPrimary from "../components/menu-primary"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <MenuPrimary />
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  )
}