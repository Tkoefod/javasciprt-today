import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import '../../css/blog.less'

export default class BlogTemp extends React.Component {
  render () {
    return (
      <div className="blogTemplate">
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Hi people
        </h1>
        <p>Blog pages</p>
        <div className="blogContainer">
          <div className="blogMainContent">
            <h1>Main Content</h1>
            <div>{this.props.children}</div>
          </div>
          <div className="blogSideContent">
            <h2>side content</h2>
          </div>
        </div>
      </div>
    )
  }
}
