import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import '../../css/blog.less'

export default class BlogTemp extends React.Component {
  _dispLinks(){
    let links = this.props.route.childRoutes.map( (route) => {
      return <div key={route.path}>
        <div>
          <Link activeClassName='activeLink' to={prefixLink(route.path)}><button className="blogLinkFullButton">{route.page.data.title}</button> </Link>
        </div>
      </div>
    });
    return( <div> {links} </div>);
  }
  render () {
    return (
      <div className="blogTemplate">
        <Helmet
          title={'Article:' + config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <div className="blogContainer">
          <div className="blogMainContent">
            <div>{this.props.children}</div>
          </div>
          <div className="blogSideContent">
            <h2 style={{
                textAlign: "center"
              }}>Articles</h2>
            {this._dispLinks()}
          </div>
        </div>
      </div>
    )
  }
}
