import React from 'react'
// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import '../../css/blog.less'

export default class LinksTemp extends React.Component {
  render () {
    return (
      <div className="linksTemplate">
        <Helmet
          title={'Article:' + config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
      <p>here be dragons</p>
      {this.props.children}
      </div>
    )
  }
}
