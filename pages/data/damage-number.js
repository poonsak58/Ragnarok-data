import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

class Data extends Component {
  render() {

    return (
      <Layout title="Damage Number">
        <header className="masthead"
          style={{ backgroundImage: 'url(' + 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daf985c8-c65b-4c6c-a0bc-ed2de199329a/d1ykf03-0693f0c1-f688-42e9-8ceb-60a6555e0cb8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGFmOTg1YzgtYzY1Yi00YzZjLWEwYmMtZWQyZGUxOTkzMjlhXC9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K5Imu_7_iCz1wIz0pa-R1mrQHrSzIzwX248sG1ycv4Q' + ')' }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h2>Damage Number</h2>
                  <span className="subheading">Version: 1.0<br />Update: 23-08-2020</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">

                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <span className="caption text-white" style={{ fontSize: '16px' }}>Damage Default</span>
                    <a href="https://mega.nz/file/YEwz3IAL#Acl43haJg9HmGsy-Bh3XbZ3O_2s_d1B_TU23NLWIMig" target="_blank">
                      <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/damage_number/default.png'} alt="" />
                      <span className="caption" style={{ fontSize: '16px' }}>Download</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <span className="caption text-white" style={{ fontSize: '16px' }}>Damage Type1</span>
                    <a href="https://mega.nz/file/EZ4Fzayb#RWfsgd15o7M5EpcLxq0rSgnO200arWXOw6CPw7A2xnM" target="_blank">
                      <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/damage_number/type1.png'} alt="" />
                      <span className="caption" style={{ fontSize: '16px' }}>Download</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <span className="caption text-white" style={{ fontSize: '16px' }}>Damage Type2</span>
                    <a href="https://mega.nz/file/dVhXTArZ#6v-P8btto3UhrVqZTShQqccXJ8eNUDeX1BF6xFTXPDk" target="_blank">
                      <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/damage_number/type2.png'} alt="" />
                      <span className="caption" style={{ fontSize: '16px' }}>Download</span>
                    </a>
                  </div>
                </div>

                <p>ตัวเลขดาเมจเท่ ๆ</p>
              </div>
            </div>
          </div>
        </article>
      </Layout >
    )
  }
}

export default Data