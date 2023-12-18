import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col size={12} sm={6}>
                        <p>Thanks for the Review!</p>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <p>                     </p>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/vivek-kumar-95979623a/"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://github.com/Vivek-5380"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com/vivek_._kr/"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}