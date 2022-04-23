import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import * as styles from "./about.module.css"

function About() {
  return (
    
    <Layout HeaderTitle='About page header'>
        <div>
          <Header title='about page render inside layout component as a child'/>
          <br />
          <br />
          <div className={styles.myComponent}>Welcome to About Page</div>          
      </div>
    </Layout>
  )
}

export default About

/* function About() {
    return (
      <div>
          <Header title='about page header component'/>
          <br />
          <br />
          Welcome to About Page
      </div>
    )
  }
  
  export default About */