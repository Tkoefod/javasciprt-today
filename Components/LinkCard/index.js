import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './links.less'

export default class LinkCard extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }
  //props: bgColor, LinkTitle, Link, Description

  render () {
    return (
      <div className="linkCardContainer">
        <a href={this.props.Link}>
          <div className="linkCardContainerHeader">{this.props.LinkTitle}</div>
        </a>
        <div className="linkCardContainerDescription">{this.props.Description}</div>
      </div>
    )
  }
}
