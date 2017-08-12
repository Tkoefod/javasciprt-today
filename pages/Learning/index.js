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
      <h3>Learning javaScript Today Learning Series</h3>
        <h5>The Articles are in recomended reading order on the right</h5>
        <p> If you are new to javaScript I recomend starting at the top
          with <Link to={prefixLink('/Learning/00_getting_started/')}>Getting Started.</Link>
        If you are fairly experianced with javaScript you could skip the first few articles that are meant to
        give some beginning knowlege and start with <Link to={prefixLink('/Learning/04_Selectors/')}>Selectors</Link>
        </p>
        <p> These articles are meant to guide you through the deep waters of javaScript universe
          and as a refrence to commonly used aspects of the language.  What they are by no means are is a full refrence
          to all of javaScript.  If you are new to javaScript then I suggest you use the articles as a guild and then
          re-inforce your learning with other guids,lessons, articles around those subjects.
        </p>
      </div>
    )
  }
}
