import React from 'react'

const Footer = (props) => {
    const { company = "FUEYMC", email = "poonsak_lds@hotmail.com" } = props

    return (
        // <div className="container-fluid">
        //     <hr />
        //     <div className="text-center title">
        //         <small>
        //             <span className="text-danger">Powered By. <span className="text-muted">{company}</span></span> | <span className="text-danger">Contact <span className="text-muted">{email}</span></span>
        //         </small>
        //     </div>
        // </div>
        <>
            <hr />

            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                            <ul class="list-inline text-center">
                                <li class="list-inline-item">
                                    <a href="#">
                                        <span class="fa-stack fa-lg">
                                            <i class="fas fa-circle fa-stack-2x"></i>
                                            <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <span class="fa-stack fa-lg">
                                            <i class="fas fa-circle fa-stack-2x"></i>
                                            <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <span class="fa-stack fa-lg">
                                            <i class="fas fa-circle fa-stack-2x"></i>
                                            <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            {/* <p class="copyright text-muted">Copyright &copy; Your Website 2020</p> */}
                            <p class="copyright">
                                <span className="text-danger">Powered By. <span className="text-muted">{company}</span></span> | <span className="text-danger">Contact <span className="text-muted">{email}</span></span>
                                <p class="copyright text-muted">Copyright &copy; 2020</p>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer