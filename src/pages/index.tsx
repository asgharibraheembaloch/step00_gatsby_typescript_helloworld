import { Link, navigate } from 'gatsby'
import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'

function Home() {
    return (
        <Layout HeaderTitle='index page header'>
            <Header title='index page header component developed inside layout conponent as a child' />
            <br />
            Welcome to Home Page
            <br />
            <br />
            <Link to='/about'>About Page Link With Anchor Tag</Link>
            <br />
            <br />
            <button onClick={() => {
                navigate('/about')
            }}>About Page Link with Button</button>
        </Layout>

    )
}

export default Home