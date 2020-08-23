import React, { Component } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
    render() {
        const { children, title = "Ragnarok Online" } = this.props

        return (
            <div>
                <style jsx>{`
                    @font-face {
                        font-family: 'Prompt-Regular';
                        src: url(${process.env.BACKEND_URL + '/fonts/Prompt-Regular.ttf'})
                    }
                    
                    @font-face {
                        font-family: 'Prompt-Medium';
                        src: url(${process.env.BACKEND_URL + '/fonts/Prompt-Medium.ttf'})
                    }
                    
                    @font-face {
                        font-family: 'Prompt-Bold';
                        src: url(${process.env.BACKEND_URL + '/fonts/Prompt-Bold.ttf'})
                    }
                `}</style>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link href={process.env.BACKEND_URL + '/fontawesome-free/css/all.min.css?v=15151515'} rel="stylesheet" type="text/css" />
                    <link rel="stylesheet" href={process.env.BACKEND_URL + '/css/style.css?v=51651561651'} />

                    <link rel="shortcut icon" href={process.env.BACKEND_URL + '/icon/icon.ico'}/>

                    <title>{title}</title>
                </Head>
                <Header />
                {children}
                <Footer />
            </div>
        )
    }
}

export default Layout