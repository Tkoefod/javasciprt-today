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
      <h3>Browser specific API for JavaScript</h3>
        <h5>The Articles are in recomended reading order on the right</h5>
        <p>
          Browsers have an API interface for JavaScript that allow you (the programmer) to access and use browser specific tools such as URL, GPS location etc. 
        </p>
      </div>
    )
  }
}
