import React, { Component } from 'react'
import Layout from '../../components/Layout'
import How2Install from '../../components/How2Install'

class Data extends Component {
  render() {

    return (
      <Layout title="พื้นตาราง">
        <header className="masthead"
          style={{ backgroundImage: 'url(' + 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daf985c8-c65b-4c6c-a0bc-ed2de199329a/d1ykf03-0693f0c1-f688-42e9-8ceb-60a6555e0cb8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGFmOTg1YzgtYzY1Yi00YzZjLWEwYmMtZWQyZGUxOTkzMjlhXC9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K5Imu_7_iCz1wIz0pa-R1mrQHrSzIzwX248sG1ycv4Q' + ')' }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h2>พื้นตาราง</h2>
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
                <h2 className="mb-4">วิธีการติดตั้ง <span style={{ color: 'red' }}>สำคัญมาก!!!</span></h2>
                <p>1. เลือกโหลดสีพื้นตารางที่ต้องการก่อน<br />2. โหลด <a href="#map_table">Map</a> ที่ต้องการให้เป็นพื้นตาราง</p>
                <hr className="mt-5" />
                <h2 className="mb-4" id="map_theme">สีพื้นตาราง</h2>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <span className="caption text-white" style={{ fontSize: '16px' }}>Default Map (พื้นเดิมทุกแมพ)</span>
                    <a href="https://mega.nz/file/FEYkUQaD#u_5DbLFRyykJaHhvTsObzJ59B-ARFoO9gFBm1B2-1Do" target="_blank">
                      <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/map_table/4444.png'} alt="" />
                      <span className="caption" style={{ fontSize: '16px' }}>Download</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <span className="caption text-white" style={{ fontSize: '16px' }}>Light Dark</span>
                    <a href="https://mega.nz/file/xdAizIZJ#gUor-5HRlOubDktorXCIqz3UUCX5CMfS2VIRBvGpVpc" target="_blank">
                      <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/map_table/1111.png'} alt="" />
                      <span className="caption" style={{ fontSize: '16px' }}>Download</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <span className="caption text-white" style={{ fontSize: '16px' }}>Deep Dark</span>
                    <a href="https://mega.nz/file/5AJQyYwK#yNqY861p4THcpwnbDLJ6aY9pHzGLSQMTg6nAk4H9LxA" target="_blank">
                      <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/map_table/2222.png'} alt="" />
                      <span className="caption" style={{ fontSize: '16px' }}>Download</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <span className="caption text-white" style={{ fontSize: '16px' }}>Chess Gray</span>
                    <a href="https://mega.nz/file/oAYCQaYR#OvAz8zyib4s-1VVZjWrtUEfBCUESneIh-A_E7JRglcc" target="_blank">
                      <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/map_table/3333.png'} alt="" />
                      <span className="caption" style={{ fontSize: '16px' }}>Download</span>
                    </a>
                  </div>
                </div>


                {/* <p>ดาต้าลบเสียงแม่มดในห้องครัวอีเดน</p>

                <p>Download : <a href="#">Mega</a></p> */}

                <hr className="mt-5" />
                <h2 className="mb-4" id="map_table">Map ที่ต้องการทำพื้นตาราง</h2>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <span className="caption text-white" style={{ fontSize: '16px' }}>Rudus Dengeon</span>
                    <a href="https://mega.nz/file/wZwHhRpZ#pV-mwySxtLChV06wCU9765t8gnVKHjBALSq--E3qiB8" target="_blank">
                      <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/map_table/rudus_dungeon.png'} alt="" />
                      <span className="caption" style={{ fontSize: '16px' }}>Download</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <span className="caption text-white" style={{ fontSize: '16px' }}>Entrance to Brasilis Dungeon (bra_fild01)</span>
                    <a href="https://mega.nz/file/8EoV1TJS#livw_bx6rwCLRZWWqqasL7GrI9RatSeAdGju4PFtQwY" target="_blank">
                      <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/map_table/bra_fild01.bmp'} alt="" />
                      <span className="caption" style={{ fontSize: '16px' }}>Download</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <span className="caption text-white" style={{ fontSize: '16px' }}>Faceworm's Nest (1@face)</span>
                    <a href="https://mega.nz/file/YYwlERiC#uQH_WMbZKeoQASBPRXtWf-BFOYDPSCwlthQGaJijbyw" target="_blank">
                      <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/map_table/1@face.bmp'} alt="" />
                      <span className="caption" style={{ fontSize: '16px' }}>Download</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <span className="caption text-white" style={{ fontSize: '16px' }}>Sky Fortress</span>
                    <a href="https://mega.nz/file/RMhFRLLI#MF07sFk5-0gJv0KgKjEl8IaecTI7X5i00TmV-GfcNWw" target="_blank">
                      <img className="img-fluid mx-auto d-block rounded" src={process.env.BACKEND_URL + '/images/map_table/sky_fortress.png'} alt="" />
                      <span className="caption" style={{ fontSize: '16px' }}>Download</span>
                    </a>
                  </div>
                </div>

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