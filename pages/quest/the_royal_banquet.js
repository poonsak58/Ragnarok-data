import React, { useState } from 'react'
import Layout from '../../components/Layout'

import NewWorldQuest from '../../components/quest/NewWorldAccessQuest'
import TheRoyalBanquet from '../../components/quest/TheRoyalBanquet'
import TerraGloria from '../../components/quest/TerraGloria'
import Illusion from '../../components/quest/Illusion'

const Banquet = () => {

    const [royalToggle, setRoyalToggle] = useState(false)
    const [terraToggle, setTerraToggle] = useState(false)
    const [illusionToggle, setIllusionToggle] = useState(false)

    const copyNavi = (e) => {
        let map = e.target.getAttribute("data-map")
        let mapX = e.target.getAttribute("data-x")
        let mapY = e.target.getAttribute("data-y")

        var textField = document.createElement('textarea')
        textField.innerText = `/navi ${map} ${mapX}/${mapY}`
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()

        e.target.classList.add("d-none")
        e.target.nextSibling.classList.remove("d-none")

        e.persist()
        setTimeout(() => {
            e.target.classList.remove("d-none")
            e.target.nextSibling.classList.add("d-none")
        }, 1000);
    }


    return (
        <Layout title="The Royal Banquet">
            <style jsx>{`
                    :global(article) {
                        color: #dadada !important;
                    }
                    :global(span.naviText) {
                        color: #e0ac28;
                        cursor: pointer;
                        padding: 1px;
                    }
                    :global(span.naviCopied) {
                        color: #e0ac28;
                        border: 1px dotted #e0ac28;
                        padding: 0 20px;
                        border-radius: 5px;
                    }
                    :global(b) {
                        color: white;
                    }
                    :global(h1, h2, h3, h4, h5) {
                        border-bottom: 1px solid #a2a9b1;
                    }
                    :global(br[Attributes Style]) {
                        clear: both;
                    }
                    :global(a) {
                        color: #58a9ff;
                    }
                `}</style>
            <header className="masthead"
                style={{ backgroundImage: 'url(' + 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daf985c8-c65b-4c6c-a0bc-ed2de199329a/d1ykf03-0693f0c1-f688-42e9-8ceb-60a6555e0cb8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGFmOTg1YzgtYzY1Yi00YzZjLWEwYmMtZWQyZGUxOTkzMjlhXC9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K5Imu_7_iCz1wIz0pa-R1mrQHrSzIzwX248sG1ycv4Q' + ')' }}
            >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h2 style={{ borderBottom: '0px' }}>EP 17.1 - Illusion</h2>
                                <span className="subheading">สำหรับตัวละครใหม่ที่ไม่ทำเควสมาก่อน<br />Require Lv. 110</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <article>
                <div className="container">
                    <NewWorldQuest copyNavi={copyNavi} />
                    <span style={{cursor: 'pointer', display: 'block', color: '#58a9ff'}} onClick={() => setRoyalToggle(!royalToggle)}>{ royalToggle ? <i className="fas fa-angle-double-down"></i> : <i className="fas fa-angle-double-right"></i> } EP 16.1 - The Royal Banquet</span>
                    { royalToggle && <TheRoyalBanquet copyNavi={copyNavi} /> }
                    <span style={{cursor: 'pointer', display: 'block', color: '#58a9ff'}} onClick={() => setTerraToggle(!terraToggle)}>{ terraToggle ? <i className="fas fa-angle-double-down"></i> : <i className="fas fa-angle-double-right"></i> } EP 16.2 - Terra Gloria</span>
                    { terraToggle && <TerraGloria copyNavi={copyNavi} /> }
                    <span style={{cursor: 'pointer', display: 'block', color: '#58a9ff'}} onClick={() => setIllusionToggle(!illusionToggle)}>{ illusionToggle ? <i className="fas fa-angle-double-down"></i> : <i className="fas fa-angle-double-right"></i> } EP 17.1 - Illusion</span>
                    { illusionToggle && <Illusion copyNavi={copyNavi} /> }

                </div>
            </article>
        </Layout>
    )
}

export default Banquet