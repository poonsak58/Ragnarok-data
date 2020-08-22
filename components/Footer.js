import React from 'react'

const Footer = (props) => {
    const { company = "FUEYMC", email = "poonsak_lds@hotmail.com" } = props

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            
                            <p className="copyright">
                                <span className="text-danger">Powered By. <span className="text-muted">{company}</span></span> | <span className="text-danger">Contact <span className="text-muted">{email}</span></span>
                                <span className="copyright text-muted d-block">Copyright &copy; 2020</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer