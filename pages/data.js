import React, { Component } from 'react'
import Layout from '../components/Layout'
import { table } from '../public/resources/blog'
import Link from 'next/link'

class Data extends Component {
  render() {
    console.log(table)
    return (
      <Layout title="แจกดาต้า">
        <header className="masthead"
          style={{ backgroundImage: 'url(' + 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daf985c8-c65b-4c6c-a0bc-ed2de199329a/d1ykf03-0693f0c1-f688-42e9-8ceb-60a6555e0cb8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGFmOTg1YzgtYzY1Yi00YzZjLWEwYmMtZWQyZGUxOTkzMjlhXC9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K5Imu_7_iCz1wIz0pa-R1mrQHrSzIzwX248sG1ycv4Q' + ')' }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h2>แจกดาต้า</h2>
                  <span className="subheading">ติดตั้งง่าย ไม่ยุ้งยากครับ</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              {table.map((value, index) => {
                return (
                  <div key={index}>
                    <Link href={'/data/' + value.url} as={process.env.BACKEND_URL + '/data/' + value.url}>
                      <a style={{textDecoration: 'none'}}>
                        <div className="row">

                          <div className="col-lg-4 col-sm-4 col-5">
                            <img src={process.env.BACKEND_URL + '/images/' + value.image_name} alt="" className="img-thumbnail d-block" width="300" height="300" />
                          </div>
                          <div className="col-lg-8 col-sm-8 col-7">
                            <h2>{value.blog_name}</h2>
                            <p>Version: {value.version}
                              <br />Update: {value.update_date}
                            </p>
                          </div>

                        </div>
                      </a>
                    </Link>
                    <hr />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Layout >
    )
  }
}

export default Data