import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {

    const [timer, setTimer] = useState({ date: new Date() });
    let timerID = ""

    const tick = () => {
        setTimer({ date: new Date() })
    }

    useEffect(() => {
        timerID = setInterval(() => tick(), 1000)
        // console.log("mount")
    }, []);
    // useEffect(() => console.log("will update data1"), [data1]);
    // useEffect(() => console.log("will update any"));
    // useEffect(() => () => console.log("will update data1 or unmount"), [data1]);
    useEffect(() => () => {
        clearInterval(timerID)
        // console.log("unmount")
    }, []);

    return (
        // <div className="container-fluid">
        //     <div className="d-flex justify-content-between align-items-center">
        //         <div className="text-left">
        //             <h1 className="text-success"><img src={ process.env.BACKEND_URL + '/images/logo/logo.png'} height="70" alt="" />Coffee Made</h1>
        //         </div>
        //         <div className="text-muted text-right mt-4">
        //             {timer.date.toLocaleTimeString()}
        //             <ul className="list-inline">
        //                 <li className="list-inline-item title"><Link href="/" as={ process.env.BACKEND_URL + '/'}><a>หน้าหลัก</a></Link></li>
        //                 <li className="list-inline-item title">|</li>
        //                 <li className="list-inline-item title"><Link href="/data" as={ process.env.BACKEND_URL + '/data'}><a>แจก Data</a></Link></li>
        //                 <li className="list-inline-item title">|</li>
        //                 <li className="list-inline-item title"><Link href="/about" as={ process.env.BACKEND_URL + '/about'}><a>เกี่ยวกับเรา</a></Link></li>
        //             </ul>
        //         </div>
        //     </div>
        //     <hr />
        // </div>

        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="index.html">Ragnarok Data & Info</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto text-center">
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">
                                <img src={'https://1.bp.blogspot.com/-EFzYmGuwz_w/XB7N3BqVYpI/AAAAAAAeTAw/dRmQQD-vEu8kjyYAyKNCa2fHrgoLzQ3QgCLcBGAs/s1600/AW2775921_03.gif'} alt="" height="50" />
                                <br />
                                หน้าแรก
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">
                                <img src={'https://1.bp.blogspot.com/-EFzYmGuwz_w/XB7N3BqVYpI/AAAAAAAeTAw/dRmQQD-vEu8kjyYAyKNCa2fHrgoLzQ3QgCLcBGAs/s1600/AW2775921_03.gif'} alt="" height="50" />
                                <br />
                                แจก Data
                            </a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="contact.html">
                                <img src={'https://1.bp.blogspot.com/-EFzYmGuwz_w/XB7N3BqVYpI/AAAAAAAeTAw/dRmQQD-vEu8kjyYAyKNCa2fHrgoLzQ3QgCLcBGAs/s1600/AW2775921_03.gif'} alt="" height="50" />
                                <br />
                                ติดต่อ
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>

        // <Navbar bg="light" expand="lg" fixed="top" id="mainNav">
        //     <Navbar.Brand href="#home">Ragnarok Data & Info</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link href="#home">Home</Nav.Link>
        //             <Nav.Link href="#link">Link</Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
    )
}


export default Header