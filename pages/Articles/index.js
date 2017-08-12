import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Blog extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
      <h3>Welcome to my learning javaScript articles</h3>
        <h5>This is a hodpodge of javaScript articles I have writen that do not fit into the learning javaScript series.</h5>
      </div>
    )
  }
}
