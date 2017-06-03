import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class LinkBar extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }

  handlePlusClick () {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusClick () {
    this.setState({ count: this.state.count - 1 })
  }

  render () {
    let styleBarChildren = {
      flex: "1 0 auto",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    }
    return (
      <div className="linkBarContainer" style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "space-around",
        }}>
        <div style={styleBarChildren}><Link to={prefixLink('/')}>Main</Link></div>
        <div style={styleBarChildren}><Link to={prefixLink('/indexOld/')}>old index page</Link></div>
        <div style={styleBarChildren}><Link to={prefixLink('/indexOld/')}>old index page</Link></div>
      </div>
    )
  }
}
