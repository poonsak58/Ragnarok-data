import React, { Component } from 'react'
import Layout from '../components/Layout'
import { table } from '../public/resources/monster'

class Index extends Component {

  // static async getInitialProps() {
  //   const res = await fetch('https://run.mocky.io/v3/d7ee8650-a3f7-4635-9bae-5f8f94b4e446')
  //   const data = await res.json()
  //   return {
  //     blogs: data
  //   }
  // }

  render() {
    // console.log(this.props.blogs)
    console.log(table)
    return (
      <Layout title="หน้าแรก">
        <header class="masthead" 
          style={{backgroundImage: 'url(' + 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daf985c8-c65b-4c6c-a0bc-ed2de199329a/d1ykf03-0693f0c1-f688-42e9-8ceb-60a6555e0cb8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGFmOTg1YzgtYzY1Yi00YzZjLWEwYmMtZWQyZGUxOTkzMjlhXC9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K5Imu_7_iCz1wIz0pa-R1mrQHrSzIzwX248sG1ycv4Q' + ')'}}
        >
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="site-heading">
                  <h2>Ragnarok Custom Data</h2>
                  <span class="subheading">Power by FUEYMC</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Layout>
    )
  }
}

export default Index
// export default () => (
//   <div>Hello World. <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>
// )
