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
        <h3>Welcome to my Articles page</h3>
        <h5> feel free to select an article from the right.</h5>
        <p> If you are new to javaScript I recomend starting at the top
          with <Link to={prefixLink('/Articles/00_getting_started/')}>Getting Started.</Link>

        </p>
      </div>
    )
  }
}
