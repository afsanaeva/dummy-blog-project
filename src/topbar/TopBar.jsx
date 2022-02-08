import React from 'react';
import "./topbar.css";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft d-flex align-items-center justify-content-center">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topMiddle ">
                <ul className="topList d-flex justify-content-center m-0 p-0">
                    <li className="topListIteam">HOME</li>
                    <li className="topListIteam">BLOG</li>
                    <li className="topListIteam">CONTACT</li>
                    <li className="topListIteam">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight d-flex align-items-center justify-content-center">
                <img className="topImg rounded-circle z-depth-2" alt="100x100" src="https://media-exp1.licdn.com/dms/image/C5103AQHI6p8E8J-pyw/profile-displayphoto-shrink_200_200/0/1567059412900?e=1648080000&v=beta&t=GBZztxZ0Fb4yJyUwLyBlVj8oWJ8IacW9pDN_tvxcDVU" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>















            {/* <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item  className="topLeft">
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item className="topMiddle">
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="topRight">
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
            </Nav> */}
        </div>
    )
}
