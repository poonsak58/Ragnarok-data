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

        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <Link href="/" as={process.env.BACKEND_URL + '/'}><a className="navbar-brand">Ragnarok Data & Info</a></Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto text-center">
                        <li className="nav-item">
                            <Link href="/" as={process.env.BACKEND_URL + '/'}>
                                <a className="nav-link">
                                    <img src={process.env.BACKEND_URL + '/images/bwing.png'} alt="" height="50" style={{marginBottom: '10px'}} />
                                    <br />
                                หน้าหลัก
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/data" as={process.env.BACKEND_URL + '/data'}>
                                <a className="nav-link">
                                    <img src={process.env.BACKEND_URL + '/images/card.png'} alt="" height="50" style={{marginBottom: '10px'}} />
                                    <br />
                                แจกดาต้า
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Header