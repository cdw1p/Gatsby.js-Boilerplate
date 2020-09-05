import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Facebook = ({ locale, url, type, siteName, title, description, image }) => {
  return (
    <Helmet>
      {siteName && <meta property='og:site_name' content={siteName} />}
      <meta locale={locale} />
      <meta property='og:url' content={url} />
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:alt' content={description} />
    </Helmet>
  )
}

export default Facebook

Facebook.propTypes = {
  locale: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string,
  siteName: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

Facebook.defaultProps = {
  siteName: null
}