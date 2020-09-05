import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/404.module.sass'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Page not found</h1>
        <p className={styles.apology}>
          Sorry, we couldn't find what you were looking for.
        </p>
        <Link to='/'>Go to the front page</Link>
      </div>
    </Layout>
  )
}
