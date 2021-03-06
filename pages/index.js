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
          Welcome to my new javaScript today site.
        </h1>
        <h5> I'll be writting a new article here about once a week on how to
          learn javaScript in today's javasScript world.</h5>
          <p>
            The first sevral articles will be presented in a lesson type
            format that should allow people that are fairly new to javaScript
            or programming to follow along and get started.
          </p>

            Get started here: <Link to={prefixLink('/Learning/00_getting_started/')}>Getting Started.</Link>
      </div>
    )
  }
}
