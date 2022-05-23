import React, { Component } from "react"
import { string } from "prop-types"

import ImageProfile from "../Image"

import "./style.scss"

class Bio extends Component {
  static propTypes = {
    name: string,
    description: string,
  }

  render() {
    const { name, description } = this.props

    return (
      <div className="bio-wrapper">
        <ImageProfile />
        <h1>{name}</h1>
        <p><b>{description}</b></p>
        <p> Tangerang | Banten</p>
      </div>
    )
  }
}

export default Bio
