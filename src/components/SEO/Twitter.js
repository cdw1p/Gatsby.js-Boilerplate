import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Twitter = ({ type, username, title, description, image }) => (
  <Helmet>
    {username && <meta name='twitter:creator' content={username} />}
    <meta name='twitter:card' content={type} />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={image} />
    <meta name='twitter:image:alt' content={description} />
  </Helmet>
)

export default Twitter

Twitter.prototype = {
  type: PropTypes.string,
  username: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

Twitter.defaultProps = {
  type: 'summary_large_image',
  username: null
}