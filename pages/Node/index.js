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
      <h3>Node specific </h3>
        <h5></h5>
        <p>
          There are some Node specific additions to the JavaScript language that enable it to interact on the filesystem.
        </p>
      </div>
    )
  }
}
