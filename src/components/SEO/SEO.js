import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import { Twitter, Facebook } from './index'

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    siteUrl,
    siteLanguage,
    ogLanguage,
    defaultTitle,
    titleTemplate,
    defaultDescription,
    defaultImage,
    twitterUsername,
    facebookSiteName
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}/${pathname}`,
    image: `${siteUrl}${image || defaultImage}`
  }

  return (
    <>
      <Helmet title={seo.title} titleTemplate={titleTemplate}>
        <html lang={siteLanguage} />
        <meta name='description' content={seo.description} />
        <meta name='image' content={seo.image} />
        <meta name='gatsby-starter' content='Gatsby Boilerplate by Digiaalto' />
      </Helmet>

      <Twitter
        username={twitterUsername}
        title={seo.title}
        description={seo.description}
        image={seo.image}
      />

      <Facebook
        locale={ogLanguage}
        url={seo.url}
        type={article ? 'article' : 'website'}
        username={facebookSiteName}
        title={seo.title}
        description={seo.description}
        image={seo.image}
      />
    </>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        siteLanguage
        ogLanguage
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        defaultImage: image
        twitterUsername
        facebookSiteName
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool
}

SEO.defaultProps = {
  title: null,
  description: null,
  article: false
}