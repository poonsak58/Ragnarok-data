import React, { Component } from 'react'
import Layout from '../../components/Layout'
import How2Install from '../../components/How2Install'

class Data extends Component {
  render() {

    return (
      <Layout title="ป้าย Kafra&Eden">
        <header className="masthead"
          style={{ backgroundImage: 'url(' + 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daf985c8-c65b-4c6c-a0bc-ed2de199329a/d1ykf03-0693f0c1-f688-42e9-8ceb-60a6555e0cb8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGFmOTg1YzgtYzY1Yi00YzZjLWEwYmMtZWQyZGUxOTkzMjlhXC9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K5Imu_7_iCz1wIz0pa-R1mrQHrSzIzwX248sG1ycv4Q' + ')' }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h2>ป้าย Kafra&Eden</h2>
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
                {/* <p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p> */}

                <a href="#">
                  <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/kafra_sexy_thumbnail.png'} alt="" />
                  <br/>
                  <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/kafra_s4.png'} alt="" />
                </a>
                <span className="caption text-muted">Kafra sexy.</span>

                <p>ป้ายบอก Npc Kafra กับ Eden เพิ่มความสะดวกเวลาคนเยอะในแมพ</p>

                <p>Download : <a href="https://mega.nz/file/MMonSILR#wNCAVN39BJh5k9WY3OfKOeqNY3iKaY_0as3z03QMgiE" target="_blank">Mega</a></p>

                <How2Install />
              </div>
            </div>
          </div>
        </article>
      </Layout >
    )
  }
}

export default Data