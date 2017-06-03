import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import LinkBar from '../components/LinkBar'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: 'rgba(15,15,15,1)',
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              backgroundColor: "rgba(15,15,15,1)",
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
            <div style={{
                backgroundColor: "rgb(15,15,15)",
                textAlign: "center",
                textShadow: "0px 0px 10px rgba(365,365,365,1)",
                fontSize: "9vw",
                whiteSpace: "nowrap",
                width: "100%",
              }}>javascript-today.com</div>
            </Link>
          </Container>
          <Container style={{
              textAlign: "center",
              backgroundColor: "rgb(15,15,15)",
              color: "rgba(255,255,255,0.75)",
            }}>
            a place to learn javascript for today's world.
          </Container>
        </Headroom>
        <Container className="mainBorder"
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
        <LinkBar />
          {this.props.children}
        </Container>
      </div>
    )
  },
})
