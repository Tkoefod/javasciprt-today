import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import LinkCard from '../../Components/Linkcard'

export default class Links extends React.Component {
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
        <h3>LINKS</h3>
        <div className="LinkCardsContainer">
          <LinkCard
            LinkTitle="My personal site"
            Link="http://thomaskoefod.com"
            Description="Minimal personal site"
          />
          <LinkCard
            LinkTitle="Notes on programming"
            Link="http://koefod.us/wp/"
            Description="Somewhat random notes I have on programming"
          />
          <LinkCard
            LinkTitle="List of programming editors"
            Link="http://koefod.us/wp/editors/"
            Description="list & links to lots of diffrent editors I have used."
          />
        </div>
      </div>
    )
  }
}
