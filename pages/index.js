import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import '../css/main.less'

export default class Index extends React.Component {
  render () {
    return (
      <div className="darkMain">
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Welcome
        </h1>
        <p>Landing page</p>
            <Link to={prefixLink('/indexOld/')}>old index page</Link>
      </div>
    )
  }
}
