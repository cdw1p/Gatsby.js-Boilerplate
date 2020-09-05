import React from 'react'
import '../styles/layout-normalize.css'
import '../styles/layout-global.sass'
import styles from '../styles/layout.module.sass'

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}