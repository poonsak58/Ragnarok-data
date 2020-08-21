import React, { Component } from 'react'
import Layout from '../components/Layout'

function Error({ statusCode }) {
    return (
        <Layout>
            <p className="text-center">
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
        </Layout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error